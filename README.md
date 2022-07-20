# canvas-demo

canvas实现弹球动画

1. 动画元素基类AcGameObject，所有动画元素都继承自基类

   timedelta两帧之间的时间

   start()开始执行一次

   update()每一帧执行一次

   destroy()销毁元素

   * requestAnimationFram()该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行

2. GameMap类， 画地图，维护rows和cols，以及每格的长度L

3. Ball类，画球