// Deklarasi kelas BankAccount
class BankAccount {
    constructor(saldoAwal = 0) {
        this.saldo = saldoAwal;
    }

    deposit() {
        return new Promise((resolve, reject) => {
            const amount = parseFloat(window.prompt("Masukkan jumlah saldo yang akan ditambahkan:"));

            if (!isNaN(amount) && amount > 0) {
                setTimeout(() => {
                    this.saldo += amount;
                    document.getElementById('saldoDisplay').textContent = formatRupiah(this.saldo);
                    resolve(`Setoran sebesar Rp. ${amount.toLocaleString('id-ID')} berhasil. Saldo saat ini: Rp. ${this.saldo.toLocaleString('id-ID')}`);
                }, 1000);
            } else {
                reject("Jumlah setoran tidak valid. Silakan masukkan angka positif.");
            }
        });
    }

    withdraw() {
        return new Promise((resolve, reject) => {
            const amount = parseFloat(window.prompt("Masukkan jumlah saldo yang ingin ditarik:"));

            if (!isNaN(amount) && amount > 0 && this.saldo >= amount) {
                setTimeout(() => {
                    this.saldo -= amount;
                    document.getElementById('saldoDisplay').textContent = formatRupiah(this.saldo);
                    resolve(`Penarikan sebesar Rp. ${amount.toLocaleString('id-ID')} berhasil. Saldo saat ini: Rp. ${this.saldo.toLocaleString('id-ID')}`);
                }, 1000);
            } else if (amount <= 0) {
                reject("Jumlah penarikan tidak valid. Silakan masukkan angka positif.");
            } else {
                reject("Dana tidak mencukupi untuk penarikan.");
            }
        });
    }
}

// Fungsi untuk format Rupiah
function formatRupiah(angka) {
    return "Rp " + angka.toLocaleString('id-ID');
}

// Membuat objek BankAccount
const account = new BankAccount(0); //setsaldo

// Mendapatkan tombol-tombol
const depositButton = document.getElementById('depositButton');
const withdrawButton = document.getElementById('withdrawButton');

// Menambahkan event listener untuk tombol "Tambah Saldo"
depositButton.addEventListener('click', () => {
    account.deposit()
        .then(message => {
            console.log(message);
            window.alert("Sedang diproses..");
        })
        .catch(error => {
            console.error(error);
            window.alert(error);
        });
});

// Menambahkan event listener untuk tombol "Kurangi Saldo"
withdrawButton.addEventListener('click', () => {
    account.withdraw()
        .then(message => {
            console.log(message);
            window.alert("Sedang diproses..");
        })
        .catch(error => {
            console.error(error);
            window.alert(error);
        });
});
