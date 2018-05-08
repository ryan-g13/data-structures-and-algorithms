'use strict';

import BinaryTree from '../binarytree';
import Node from '../node';
import breadthFirstTraversal from '../breadth-first-traversal';

describe('This is a test suite to test the "breadth first traversal method"', () => {
  test('First test is to test constructor is working', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const bt = new BinaryTree(one);
    one.left = two;
    one.right = three;
    two.left = four;
    expect(bt.root.value).toEqual(1);
    expect(bt.root.left.left.value).toEqual(4);
  });
  test('Second test is to test incorrect data input', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    const bt = new BinaryTree(one);
    one.left = two;
    two.left = three;
    three.left = four;
    four.left = five;
    five.left = six;
    six.left = seven;
    seven.left = eight;
    eight.left = nine;
    expect(breadthFirstTraversal(bt.root)).toEqual('1,2,3,4,5,6,7,8,9');
  });
  test('Third test is to test successful data input', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    const bt = new BinaryTree(one);
    one.left = two;
    one.right = three;
    two.left = four;
    three.left = five;
    three.right = six;
    five.left = seven;
    five.right = eight;
    six.right = nine;
    expect(breadthFirstTraversal(bt.root)).toEqual('1,2,3,4,5,6,7,8,9');
  });
});

