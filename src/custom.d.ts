//解决引入png报错
declare module "*.png" {
    const value: any;
    export = value
}
declare module "*.json" {
    const value: any;
    export = value
}