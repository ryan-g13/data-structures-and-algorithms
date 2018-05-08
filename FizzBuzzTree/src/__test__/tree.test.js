'use strict';

import BinaryTree from '../lib/binarytree';
import Node from '../lib/node';
import { inOrderTraversal } from '../lib/traversal';
import fizzBuzzTree from '../lib/fizzbuzztree';

describe('This is a test suite to test the "inorder traversal"', () => {
  test('First test is to test constructor is working', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const bt = new BinaryTree(one);
    one.left = two;
    one.right = three;
    two.left = four;
    console.log(inOrderTraversal(bt.root));
    console.log(bt.root);
    expect(bt.root.value).toEqual(1);
    expect(bt.root.left.left.value).toEqual(4);
    console.log(bt.root.left.right.value);
  });
  test('Second test is to test incorrect data input', () => {
    const one = new Node(null);
    const bt = new BinaryTree(one);
    expect(fizzBuzzTree(bt)).toBeFalsy();
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
    fizzBuzzTree(bt);
    expect(bt.right.left.value).toEqual('buzz');
  });
});

