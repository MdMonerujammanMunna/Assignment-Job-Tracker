1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById() ব্যবহার করে যে কোনো HTML element কে ID এর মাধ্যমে access করা যায় |

getElementByClassName() ব্যবহার করে HTML element কে যে class name দেওয়া আছে সেটা দিয়ে element টা কে  access করা যায়।

querySelector() হল একটি CSS selector  যা মিল হওয়া প্রথম element কে প্রদান করে থাকে |

querySelectorAll() এটিও একটি CSS selector যা মিল হওয়া সব এলিমেন্ট গুলোকে প্রদান করে থাকে |


2. How do you create and insert a new element into the DOM?

সর্বপ্রথম আমাদের যে element make করতে চাই তা document.createElement(" ") ভিতরে দিতে হবে এরপর এর ভিতরে আমরা কি add করতে চাই তা innerhtml বা innertext এর মাধ্যমে দিতে হবে then appendchild() method ব্যবহার করে insert করতে হবে । এভাবেই DOM a new element make হয়ে থাকে |


What is Event Bubbling? And how does it work?

Event Bubbling হলো JavaScript এমন একটি পদ্ধতি যখন কোন event ঘটে তখন সেটি এই element কে select করে | এরপর তা এর parent কাছে যায় এরপর তার parent এর কাছে যায় এভাবে পর্যায়ক্রমিক ভাবে document এ যায় |


What is Event Delegation in JavaScript? Why is it useful?

Event Delegation হলো এমন একটি পদ্ধতি যেখানে আমরা parent এর ভিতরে event listener add করে তার Child element গুলোকে event handle করে ব্যবহার করতে পারি |


What is the difference between preventDefault() and stopPropagation() methods?

stopPropagation() ব্যবহার করা হয় Propagation বন্ধ করার জন্য অর্থাৎ Event Bubbling বন্ধ করার জন্য | এটি event কে run হতে দেয় না |
preventDefault() ব্যবহার করা হয় browser এর স্বাভাবিক কাজ গুলোকে বন্ধ করার জন্য অর্থাৎ HTML element গুলো যে স্বাভাবিক কাজগুলো করে browser এ তা থামিয়ে দেয় |
