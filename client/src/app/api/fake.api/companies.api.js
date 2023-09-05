const companies = [
    { _id: "EVNDxieEk3u3QSAHqJbbm", name: "Yamaha" },
    { _id: "4Q63efYgxXpBiRUl1wATA", name: "Takamine" },
    { _id: "J8IGYnI6Z7o97Fmz-y5pd", name: "Fender" },
    { _id: "FC6ccDpwJhd2lNmRk6mkC", name: "Casio" },
    { _id: "R7IMxJN7q0ubkzOgNIw1h", name: "Korg" },
    { _id: "Qzn8AqRM0W8x0eT6UqpyD", name: "Kawai" },
    { _id: "OS2Uaf44mBHPx4LXhaNPJ", name: "Tama" },
    { _id: "LmGTSEU98rQIK-VpPLtVY", name: "Sonor" },
    { _id: "cnHO6P_ZEDfrI1aXWrnoa", name: "Dixon" },
    { _id: "9WXeIyBtZxYaGUbSRwf67", name: "Stomvi" },
    { _id: "2Gz4JLdHXmdDz0NG_JYfh", name: "Hora" }
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(companies);
        }, 2000);
    });

export default {
    fetchAll
};
