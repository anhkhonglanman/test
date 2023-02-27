
class XeMay {
    private tenHang: string;
    constructor(tenHang: string) {
        this.tenHang = tenHang;
    }
    public chay(moTa?: string): void| number{
        if(!moTa) {
            console.log('Xe may chay')
        } else {
            console.log('xe may chay kieu' + moTa)
            return 1
        }
    }
}
let xeMay : XeMay = new XeMay('Honda');
xeMay.chay();
xeMay.chay('vun vut');


