/****************************************************
 * reindeer.js
 * 
 * Our predefined variables:
 * 
 *  - speed     we will animate the reindeer to move so it will have a speed.
 *  - x         the reindeer's x-axis position.
 *  - y         the reindeer's y-axis position.
 *  - width     the reindeer's width.
 *  - height    the reindeer's height.
 *  - gravity   the reindeer will have a gravity for "falling" animation.
 *  - lift      the reindeer will have a lift for "jumping" animation.
 * 
 * Our predefined methods:
 * 
 *  - show()    that we will use for drawing the image.
 *  - update()  that we will use for animation, in this case, creating gravity.
 *  - up()      that we will use for creating jump animation when user press `Space Bar`.
 * 
 ****************************************************/

class Reindeer {
  speed = 0;
  x = 64;
  y = CANVAS_HEIGHT / 2;
  height = 64;
  width = this.height * (3/4);
  gravity = 0.2;
  lift = -7;


  /****************************************************
   * Show the reindeer by using the image() from p5,
   * which takes img, x, y and size
   * @custom
   ****************************************************/
  show() {

  }


  /****************************************************
   * Create gravity
   * @custom
   ****************************************************/
  update() {

  }


  /****************************************************
   * Make the reindeer go upwards
   * @custom
   ****************************************************/
  up() {

  }
}
