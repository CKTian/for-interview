/**
 * 选一个数字作为枢轴 最好是随机取 避免极端情况是、
 * 选择 left 和 right 两个指针
 * left 指针从左向右移动，直到找到一个大于枢轴的数字
 * right 指针从右向左移动，直到找到一个小于枢轴的数字
 * 如果 left 指针小于 right 指针，则交换这两个数字
 * 如果 left 指针大于等于 right 指针，则将枢轴放到 right 指针的位置
 * 递归地对左边和右边的子数组进行排序
 */
const unsortedArray = [3, 6, 8, 10, 1, 2, 1];

const quickSort = (arr) => {
  if (arr.length <= 1) return arr; // 如果数组长度小于等于1，直接返回
  const pivotIndex = Math.floor(Math.random() * arr.length)
  const pivot = arr[pivotIndex];

  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i == pivotIndex) continue; // 跳过枢轴本身
    if(arr[i]<pivot){ 
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }
  
  // // 递归地对左边和右边的子数组进行排序
  return [...quickSort(left), pivot, ...quickSort(right)];
};


// 测试示例
console.log("排序前:", unsortedArray);
console.log("排序后:", quickSort(unsortedArray)); // 输出: [1, 1, 2, 3, 6, 8, 10]
// quickSort(unsortedArray)