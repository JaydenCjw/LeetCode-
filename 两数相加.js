// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

// 竖式加法的思想：
// 1、从低位开始，逐位相加，若sum >= 10,保留个位，进一；
// 2、若最高位上存在进位，要在最前面补1；

// struct ListNode {
//     int val;    //定义val变量值，存储节点值
//     struct ListNode *next;   //定义next指针，指向下一个节点，维持节点连接
// }
// 在节点ListNode定义中，定义为节点为结构变量。
// 节点存储了两个变量：value 和 next。value 是这个节点的值，next 是指向下一节点的指针，当 next 为空指针时，这个节点是链表的最后一个节点。
// 注意注意val只代表当前指针的值，比如p->val表示p指针的指向的值；而p->next表示链表下一个节点，也是一个指针。
// 构造函数包含两个参数 _value 和 _next ，分别用来给节点赋值和指定下一节点

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let m = 0; //进位
    // 返回值
    let res = new ListNode(null);
    let temp = res;
    
    // 判断是否还有值进行相加
    while (l1 != null || l2 != null) {
        // 有值就赋值val
        let temp0 = l1 != null ? l1.val : 0;
        let temp1 = l2 != null ? l2.val : 0;

        // 进行当前位相加，以及进位
        let sum = temp0 + temp1 + m;
        m = sum >= 10 ? 1 : 0;

        temp.next = new ListNode(parseInt(sum % 10));
        temp = temp.next;

        if (l1 != null) l1 = l1.next;
        if (l2 != null) l2 = l2.next;
    }

    if (m != 0) {
        temp.next = new ListNode(m);
    }
    return res.next
};

let l1 = new ListNode(2);
l1.next = new ListNode(5);
let x = l1;
let l2 = new ListNode(3);
l2.next = new ListNode(5);
let y = l2;
let s = addTwoNumbers(x, y);
console.log(s);
