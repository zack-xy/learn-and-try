const foo = 123;
const bar = foo.toString();
Math.seedrandom()
const testMap = new Map()

// 可实例化
interface CallMeWithNewToGetString {
  new (): string;
}

// 使用
declare const Foo: CallMeWithNewToGetString;
const bar2 = new Foo(); // bar 被推断为 string 类型

type FieldState = {
  value: string;
};

type FromState = {
  isValid: boolean; // Error: 不符合索引签名
  [filedName: string]: FieldState;
};

type FormState2 = { isValid: boolean } & { [fieldName: string]: FieldState };
