# blueLines

Copy the blueLines.js file and paste into the editor playground at https://editor.p5js.org or open the blueLines.html file for the experience in a web browser.

This p5.js code creates an interactive animation of 100 moving curves with light blue flares that appear and trail when the curves hit the edge of the canvas and then shrink over time. Here's the code broken down:

Variables angle, curves, and flares are defined globally. angle is initialized to 0, while curves and flares are empty arrays.

The setup() function creates a canvas with the size of the window and a white background. It also initializes 100 instances of the Curve class and adds them to the curves array.

The draw() function continuously updates the background with a translucent white color, creating a trail effect. It then updates and displays each curve and flare in their respective arrays, and increments the angle by 0.005.

The Curve class defines a curve object with randomly placed vertices, a random stroke weight, and a unique noise offset. The update() method moves each vertex according to a combination of its speed, angle, and Perlin noise, and creates a flare object when a vertex hits the edge of the canvas. The display() method renders the curve on the canvas using the vertices.

The Flare class defines a flare object with a random size and position (based on the vertex that created it). The update() method decreases the size of the flare over time, while the display() method renders the flare as a light blue, semi-transparent ellipse.

1. Global variables:

angle: A variable to control the angle of the curves' motion.
curves: An array to store the Curve objects.
flares: An array to store the Flare objects.

2. setup() function:

Initializes the canvas with the window's width and height.
Sets the background color to white.
Creates 100 Curve objects and stores them in the curves array.

3. draw() function:

Refreshes the background with a semi-transparent white color for a fading trail effect.
Updates and displays all the Curve objects in the curves array.
Updates and displays all the Flare objects in the flares array.
Increments the angle variable.

4. Curve class:

constructor: Initializes the Curve object with random vertices, stroke weight, and a noise offset.
update(): Updates the position of each vertex based on speed, angle, and Perlin noise. When a vertex reaches the canvas edges, it inverts its speed and creates a Flare object at its position.
display(): Draws the curve using the updated vertex positions.

5. Flare class:

constructor: Initializes the Flare object with a random size and the position of the input vertex.
update(): Reduces the Flare object's size with each frame, creating a shrinking effect.
display(): Draws a semi-transparent light blue ellipse representing the Flare object with its updated size.
