const total = 128;
const each = (128 - 2) / 9;
const ana = each + 2;

const totalEach = document.querySelector('.totalEach');
const totalAna = document.querySelector('.totalAna');


totalEach.innerHTML = totalEach.innerHTML + each;
totalAna.innerHTML = totalAna.innerHTML + ana;