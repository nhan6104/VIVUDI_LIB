/******************************************************************************\
 *                   © ViVuDi 2025. All rights reserved.                      *
 ******************************************************************************
 *  File        : base.service.ts                                             *
 *  Author      : Minh Nhật                                                   *
 *  Created     : 13/06/2025                                                  *
 *  Updated by  :                                                             *
 *  Modified    :                                                             *
\******************************************************************************/
import { VIVUDI_API_URL } from "./index.js";
;
/******************************************************************************
 * Hàm request: Thực hiện gọi API với các method khác nhau                    *
 ******************************************************************************/
const request = async (method, endpoint, options = {}) => {
    const { headers = {}, body, params } = options;
    /******************************************************************************
     * Xây dựng URL với query params nếu có                                       *
     ******************************************************************************/
    const url = new URL(`${VIVUDI_API_URL}${endpoint}`);
    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                url.searchParams.append(key, String(value));
            }
            ;
        });
    }
    ;
    /******************************************************************************
     * Thiết lập headers, đảm bảo có Content-Type là application/json             *
     ******************************************************************************/
    const finalHeaders = {
        'Content-Type': 'application/json',
        ...headers,
    };
    /******************************************************************************
     * Chuẩn bị fetchOptions                                                      *
     ******************************************************************************/
    const fetchOptions = {
        method,
        headers: finalHeaders,
    };
    /******************************************************************************
     * Nếu có body, chuyển đổi thành JSON và thêm vào fetchOptions               *
     ******************************************************************************/
    if (body) {
        fetchOptions.body = JSON.stringify(body);
    }
    ;
    try {
        const response = await fetch(url.toString(), fetchOptions);
        const contentType = response.headers.get('Content-Type') || '';
        /******************************************************************************
         * Kiểm tra xem response có thành công không (status 200-299)                *
         ******************************************************************************/
        if (!response.ok) {
            const errorText = contentType.includes('application/json')
                ? JSON.stringify(await response.json())
                : await response.text();
            throw new Error(errorText || `HTTP Error ${response.status}`);
        }
        ;
        /******************************************************************************
         * Nếu response là JSON, chuyển đổi và trả về kết quả                        *
         * Nếu không, trả về text thông thường                                         *
         ******************************************************************************/
        if (contentType.includes('application/json')) {
            return (await response.json());
        }
        ;
        const text = await response.text();
        return text;
    }
    catch (error) {
        throw error;
    }
    ;
};
/******************************************************************************
 * baseApiService: Cung cấp các method gọi API                                *
 ******************************************************************************/
export const baseApiService = {
    get: (endpoint, options) => request('GET', endpoint, options),
    post: (endpoint, options) => request('POST', endpoint, options),
    put: (endpoint, options) => request('PUT', endpoint, options),
    delete: (endpoint, options) => request('DELETE', endpoint, options),
};
