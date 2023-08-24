## 1. so sánh SSR and CSR

| Client-side rendering (CSR)                                                        | Server-side rendering (SSR)              |
| ---------------------------------------------------------------------------------- | ---------------------------------------- |
| Lần render đầu ở phía máy khách bằng JavaScript                                    | Render ở phía máy chủ                    |
| Cung cấp trải nghiệm người dùng tốt hơn và phản hồi nhanh hơn                      | Cung cấp SEO tốt hơn                     |
| Tải chậm hơn lần đầu tải trang vì JavaScript bundle cần được tải xuống và thực thi | Update page chậm hơn và kém phản hồi hơn |
| Kém thân thiện với SEO hơn                                                         | Tải ban đầu nhanh hơn                    |

## 2. so sánh SPA and MPA

| Single-page web applications (SPA)                                                                                               | Multiple-page web applications (MPA)                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Tải một trang HTML và cập nhật động nội dung khi người dùng tương tác với ứng dụng                                               | Bao gồm nhiều trang HTML được liên kết với nhau                                                           |
| Cung cấp trải nghiệm người dùng nhanh hơn và phản hồi nhanh hơn vì trang có thể được cập nhật mà không cần làm mới toàn bộ trang | Thân thiện với SEO hơn vì các công cụ tìm kiếm có thể thu thập dữ liệu nội dung HTML được hiển thị đầy đủ |
| Dễ dàng phát triển và bảo trì hơn vì chỉ có một tệp HTML để quản lý                                                              | Cung cấp thời gian tải ban đầu nhanh hơn vì mỗi trang có thể được tải độc lập                             |
| Tải chậm hơn lần đầu tải trang vì gói JavaScript cần được tải xuống và thực thi trước khi trang có thể được hiển thị             | Chậm hơn và kém phản hồi hơn vì có thể cần phải làm mới toàn bộ trang để cập nhật trang                   |
| Kém thân thiện với SEO hơn vì các công cụ tìm kiếm có thể không thu thập được nội dung JavaScript                                | Phát triển và bảo trì có thể phức tạp hơn vì có nhiều tệp HTML cần quản lý                                |

## 3. Trong JavaScript, có 2 kiểu exports và import

### Export types:

| Named exports                                                                                      | Default exports                                                                     |
| -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Ta có thể export 1 hoặc nhiều những modules từ một file sử dụng 'export' keyword.                  | Ta có thể export một module từ một file sử dụng 'export default' keyword.           |
| Ví dụ:                                                                                             | Ví dụ:                                                                              |
| ```                                                                                                | ```                                                                                 |
| // module.js                                                                                       | // module.js                                                                        |
| export const foo = 'bar';                                                                          | const myModule = { foo: 'bar' };                                                    |
| export const baz = 'qux';                                                                          | export default myModule;                                                            |
| ```                                                                                                | ```                                                                                 |
|                                                                                                    |                                                                                     |
| Để import các named exports, ta sử dụng cú pháp: `import { foo, baz } from './module.js';`         | Để import default export, ta sử dụng cú pháp: `import myModule from './module.js';` |
| Để import tất cả các named exports, ta sử dụng cú pháp: `import * as myModule from './module.js';` |                                                                                     |

### Import types:

| Named exports                                                                                            | Default exports                                                                                  |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Ta có thể import một hoặc nhiều tên module từ một file sử dụng 'import' keyword dựa theo tên của module. | Ta có thể import một single default module từ một file sử dụng import dựa theo tên muốn sử dụng. |
| Ví dụ:                                                                                                   | Ví dụ:                                                                                           |
| ```                                                                                                      | ```                                                                                              |
| // app.js                                                                                                | // app.js                                                                                        |
| import { foo, baz } from './module.js';                                                                  | import myModule from './module.js';                                                              |
| console.log(foo); // Output: 'bar'                                                                       | console.log(myModule.foo); // Output: 'bar'                                                      |
| console.log(baz); // Output: 'qux'                                                                       |                                                                                                  |
| ```                                                                                                      | ```                                                                                              |
|                                                                                                          |                                                                                                  |
| Để import tất cả các named exports, ta sử dụng cú pháp: `import * as myModule from './module.js';`       |  Lưu ý: Nếu một module được export dưới dạng default, ta có thể đặt tên cho nó khi import.                                                                                                 |


## Note: Điều quan trọng cần lưu ý là ta có thể có nhiều named export trong một tệp nhưng chỉ có một export default. Ngoài ra, khi import named expor, bạn cần sử dụng tên chính xác của module, nhưng khi import export default, bạn có thể sử dụng bất kỳ tên nào bạn muốn cho module
