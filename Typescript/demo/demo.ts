// Định nghĩa lớp TaiLieu để quản lý các tài liệu trong thư viện
class TaiLieu {
    private maTaiLieu: string;
    private tenNhaXuatBan: string;
    private soBanPhatHanh: number;

    constructor(maTaiLieu: string, tenNhaXuatBan: string, soBanPhatHanh: number) {
        this.maTaiLieu = maTaiLieu;
        this.tenNhaXuatBan = tenNhaXuatBan;
        this.soBanPhatHanh = soBanPhatHanh;
    }

    public getMaTaiLieu(): string {
        return this.maTaiLieu;
    }

    public getTenNhaXuatBan(): string {
        return this.tenNhaXuatBan;
    }

    public getSoBanPhatHanh(): number {
        return this.soBanPhatHanh;
    }

    public getInfo(): string {
        return `Mã tài liệu: ${this.maTaiLieu}\nTên nhà xuất bản: ${this.tenNhaXuatBan}\nSố bản phát hành: ${this.soBanPhatHanh}`;

}

// Định nghĩa lớp Sach kế thừa từ lớp TaiLieu và quản lý các thuộc tính của sách
class Sach extends TaiLieu {
    private tenTacGia: string;
    private soTrang: number;

    constructor(maTaiLieu: string, tenNhaXuatBan: string, soBanPhatHanh: number, tenTacGia: string, soTrang: number) {
        super(maTaiLieu, tenNhaXuatBan, soBanPhatHanh);
        this.tenTacGia = tenTacGia;
        this.soTrang = soTrang;
    }

    public getTenTacGia(): string {
        return this.tenTacGia;
    }

    public getSoTrang(): number {
        return this.soTrang;
    }

    public getInfo(): string {
        return `${super.getInfo()}\nTên tác giả: ${this.tenTacGia}\nSố trang: ${this.soTrang}`;
    }
}

// Định nghĩa lớp TapChi kế thừa từ lớp TaiLieu và quản lý các thuộc tính của tạp chí
class TapChi extends TaiLieu {
    private soPhatHanh: number;
    private thangPhatHanh: number;

    constructor(maTaiLieu: string, tenNhaXuatBan: string, soBanPhatHanh: number, soPhatHanh: number, thangPhatHanh: number) {
        super(maTaiLieu, tenNhaXuatBan, soBanPhatHanh);
        this.soPhatHanh = soPhatHanh;
        this.thangPhatHanh = thangPhatHanh;
    }

    public getSoPhatHanh(): number {
        return this.soPhatHanh;
    }

    public getThangPhatHanh(): number {
        return this.thangPhatHanh;
    }

    public getInfo(): string {
        return `${super.getInfo()}\nSố phát hành`
