
//Extending Interface:  melanjutkan (extends) ke Interface lain


export interface Employee {
    id: string;
    name: string;
    division: string;
}

// artinya:semua yang ada di employee dimiliki oleh manajer
export interface Manager extends Employee {
    // ini misal jumlah karyawan yang ditangani oleh manajer
    numberOfEmployees: number;

}