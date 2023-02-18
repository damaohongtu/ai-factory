package com.damaohongtu.chat.common;

import lombok.Builder;
import lombok.Data;

/**
 * @author: 大袤宏图
 * FileName: BaseResponse
 */
@Data
@Builder
public class BaseResponse<T> {

    private Integer status;

    private String code;

    private String msg;

    private T data;

}
