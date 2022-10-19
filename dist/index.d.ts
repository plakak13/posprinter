import { Printer } from "./model";
import { Command, PrinterConstants, printerCommand, printerTools } from "./printerCommand";
declare type Callback = (devices: Printer[]) => void;
declare class PrinterModule {
    printerModule: any;
    private callback;
    private deviceEventEmitter;
    private isDebug;
    constructor();
    init(isDebug?: boolean): Promise<void>;
    getDevices(): Promise<Printer[]>;
    scanDevices(callback: Callback): Promise<boolean>;
    stopScanDevices(): Promise<boolean>;
    connectDevice(deviceID: string, timeout?: number): Promise<any>;
    printTestReceipt(storageUrl?: string): Promise<void>;
    getEnCoding(): Promise<void>;
    private listenToNativeEvent;
    private log;
}
declare const RNPosPrinter: PrinterModule;
export { RNPosPrinter, Command, PrinterConstants, printerCommand, printerTools };
export default RNPosPrinter;
