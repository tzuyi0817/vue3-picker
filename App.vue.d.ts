import type { LangType } from './types';
declare const _sfc_main: import("vue").DefineComponent<{}, {
    currentSelect: import("vue").Ref<{
        langType?: number | undefined;
        code?: string | undefined;
        original?: string | undefined;
        version?: number | undefined;
    }>;
    isShowPicker: import("vue").Ref<boolean>;
    dataList: import("vue").Ref<{
        langType: number;
        code: string;
        original: string;
        version: number;
    }[]>;
    options: {
        confirmColor: string;
        cancelClass: string;
        titleText: string;
    };
    anchor: import("vue").ComputedRef<number>;
    confirm: (value: LangType) => void;
    cancel: () => void;
    toggle: () => void;
    Picker: import("vue").DefineComponent<{
        data: {
            type: null;
            required: true;
            default: () => never[];
        };
        isShowPicker: {
            type: BooleanConstructor;
            required: true;
            default: boolean;
        };
        options: {
            type: ObjectConstructor;
            required: false;
            default: () => {};
        };
        anchor: {
            type: (NumberConstructor | ArrayConstructor)[];
            required: true;
        };
        showKey: {
            type: (ArrayConstructor | StringConstructor)[];
            required: false;
        };
        swipeTime: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
    }, {
        props: {
            data: import('./types').PickData;
            isShowPicker: boolean;
            options: Partial<import('./types').PickerOptions>;
            anchor: number | number[];
            showKey?: string | string[] | undefined;
            swipeTime: number;
        };
        emit: (event: "update:isShowPicker" | "cancel" | "confirm", ...args: any[]) => void;
        options: import("vue").ComputedRef<{
            cancelClass: string;
            confirmClass: string;
            titleClass: string;
            cancelColor: string;
            confirmColor: string;
            titleColor: string;
            cancelText: string;
            confirmText: string;
            titleText: string;
        }>;
        cancelColor: import("vue").ComputedRef<string>;
        confirmColor: import("vue").ComputedRef<string>;
        titleColor: import("vue").ComputedRef<string>;
        showKeys: import("vue").ComputedRef<(string | undefined)[]>;
        pickerData: import("vue").Ref<import('./types').NormalData[][]>;
        wheelWrapper: import("vue").Ref<any>;
        cancel: () => void;
        confirm: () => void;
        closePicker: () => void;
        isObject: (value: unknown) => value is Record<any, any>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:isShowPicker" | "cancel" | "confirm")[], "update:isShowPicker" | "cancel" | "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: null;
            required: true;
            default: () => never[];
        };
        isShowPicker: {
            type: BooleanConstructor;
            required: true;
            default: boolean;
        };
        options: {
            type: ObjectConstructor;
            required: false;
            default: () => {};
        };
        anchor: {
            type: (NumberConstructor | ArrayConstructor)[];
            required: true;
        };
        showKey: {
            type: (ArrayConstructor | StringConstructor)[];
            required: false;
        };
        swipeTime: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
    }>> & {
        "onUpdate:isShowPicker"?: ((...args: any[]) => any) | undefined;
        onCancel?: ((...args: any[]) => any) | undefined;
        onConfirm?: ((...args: any[]) => any) | undefined;
    }, {
        data: any;
        options: Record<string, any>;
        swipeTime: number;
    }>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _sfc_main;
