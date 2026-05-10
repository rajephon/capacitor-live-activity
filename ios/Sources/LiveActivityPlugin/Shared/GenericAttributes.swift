import ActivityKit
import Foundation

@available(iOS 16.2, *)
public struct GenericAttributes: ActivityAttributes {
    /// 동적 키-값 dictionary를 Live Activity ContentState로 운반하는 컨테이너.
    ///
    /// JSON 직렬 형태는 **flat** 객체로 정의된다 (예: `{"phase":"streaming","title":"..."}`).
    /// 서버가 APNs Live Activity push의 `aps.content-state`를 별도 wrapping 없이 보낼 수 있도록
    /// 일관성을 유지한다. ActivityKit이 새 push payload를 디코딩하든, 디바이스에 등록된
    /// 기존 ContentState를 인코딩하든 모두 동일한 flat 표현을 사용한다.
    ///
    /// 하위 호환: 라이브러리 v0.x 시기에는 `{"values":{...}}` nested 형태로 인코딩되었으므로,
    /// 이전 디바이스에 등록된 LA가 앱 업데이트 후에도 정상 디코딩되도록 디코더는 flat → nested
    /// 순으로 fallback한다.
    public struct ContentState: Codable, Hashable {
        public var values: [String: String]

        public init(values: [String: String]) {
            self.values = values
        }

        public init(from decoder: Decoder) throws {
            // 1순위: flat dict — 서버 push 표준 형태 (`{phase, title, ...}`)
            if let single = try? decoder.singleValueContainer(),
               let flat = try? single.decode([String: String].self) {
                self.values = flat
                return
            }
            // 2순위: legacy nested 형태 — v0.x 시기에 인코딩된 ContentState 디코딩 호환
            let keyed = try decoder.container(keyedBy: LegacyKeys.self)
            self.values = try keyed.decode([String: String].self, forKey: .values)
        }

        public func encode(to encoder: Encoder) throws {
            // 항상 flat 표현으로 인코딩 — 서버 push wire format과 동일
            var container = encoder.singleValueContainer()
            try container.encode(values)
        }

        private enum LegacyKeys: String, CodingKey {
            case values
        }
    }

    public var id: String
    public var staticValues: [String: String]

    public init(id: String, staticValues: [String: String]) {
        self.id = id
        self.staticValues = staticValues
    }
}
