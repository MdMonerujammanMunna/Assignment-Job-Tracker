
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

    if (count == 0) {
        allCardSection.innerHTML = ``
        allCardSection.innerHTML = `
         <div class="flex flex-col  items-center border border-[#e6e7e9] rounded justify-center mt-[60px]">
                <img src="jobs.png" alt="empty" class="mt-[111px]">
                <p class="text-[20px] font-bold text-blue-950 mt-4">No Jobs Available</p>
                <p class="text-gray-400 mt-2 mb-[111px]">Check back soon for new job opportunities.</p>
            </div>
        `
        return;

    };



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
