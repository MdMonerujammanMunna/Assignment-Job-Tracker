
let interviewList = [];
let rejectedList = [];

const allBtn = document.getElementById('allBtn');
const interviewBtn = document.getElementById('interviewBtn');
const rejectedBtn = document.getElementById('rejectedBtn');

const totalCount = document.getElementById('totalCount');
const allCardSection = document.getElementById('allCard');
const totalJobCount = document.getElementById("jobCount");

function calculateCount() {
    totalCount.innerText = allCardSection.children.length;
    const count = allCardSection.children.length;
    totalCount.innerText = count;
    totalJobCount.innerText = count + ' Jobs'
   
} calculateCount()

function toggleStyle(id) {
    if (id == 'interviewBtn') {
        totalJobCount.innerText = interviewList.length + ' Jobs';
    } else if (id == 'rejectedBtn') {
        totalJobCount.innerText = rejectedList.length + ' Jobs';
    } else {
        totalJobCount.innerText = allCardSection.children.length + ' Jobs';
    }
    allBtn.classList.remove('text-white', 'font-bold');
    interviewBtn.classList.remove('text-white', 'font-bold');
    rejectedBtn.classList.remove('text-white', 'font-bold');

    allBtn.classList.add('bg-white', 'text-black');
    interviewBtn.classList.add('bg-white', 'text-black');
    rejectedBtn.classList.add('bg-white', 'text-black');

    const selected = document.getElementById(id);

    selected.classList.remove('bg-white', 'text-black');
    selected.classList.add('bg-black', 'text-white', 'font-bold');
    currentStatusBtn = id;

}
