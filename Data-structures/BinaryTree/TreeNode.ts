export class TreeNode<E> {
    public data: E;
    public left: TreeNode<E> | null;
    public right: TreeNode<E> | null;

    constructor(date: E) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

}