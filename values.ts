export type ValueType = "null" | "number" | "boolean";

export interface RuntimeValue {
    type: ValueType;
}

export interface NullValue extends RuntimeValue {
    type: "null";
    value: "null";
}

export interface BooleanValue extends RuntimeValue {
    type: "boolean";
    value: boolean;
}

export interface NumberValue extends RuntimeValue {
    type: "number";
    value: number;
}
