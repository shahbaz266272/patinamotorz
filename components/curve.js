import * as shape from "d3-shape";
import { scale } from "react-native-size-scaling";

// Set the radius for rounded corners
const radius = scale(20); // Adjust the radius as needed

// Function to create a rounded rectangle path
const lineWithRoundedCorners = (width, height) => {
  // Start building the path
  const path = [];

  // Move to the top left corner
  path.push(`M ${radius}, 0`); // Move to starting point with radius

  // Top edge
  path.push(`H ${width - radius}`); // Draw top edge to the right

  // Top-right corner
  path.push(`A ${radius} ${radius} 0 0 1 ${width} ${radius}`); // Draw arc for top-right corner

  // Right edge
  path.push(`V ${height - radius}`); // Draw right edge down

  // Bottom-right corner
  path.push(`A ${radius} ${radius} 0 0 1 ${width - radius} ${height}`); // Draw arc for bottom-right corner

  // Bottom edge
  path.push(`H ${radius}`); // Draw bottom edge to the left

  // Bottom-left corner
  path.push(`A ${radius} ${radius} 0 0 1 0 ${height - radius}`); // Draw arc for bottom-left corner

  // Left edge
  path.push(`V ${radius}`); // Draw left edge up

  // Top-left corner
  path.push(`A ${radius} ${radius} 0 0 1 ${radius} 0`); // Draw arc for top-left corner

  // Close the path
  path.push(`Z`); // Close the path

  return path.join(' '); // Combine path commands into a single string
};

//** Path Curved */
const lineCurvedDown = (iPosition, height, circle) => {
  const position = iPosition;
  const circleWidth = circle + position;
  const trim = (position + circleWidth) / 2;

  const curved = shape
    .line()
    .x((d) => d.x)
    .y((d) => d.y)
    .curve(shape.curveBasis)([
      { x: position - scale(20), y: 0 }, // border center left
      { x: position - scale(10), y: scale(2) },
      { x: position - scale(2), y: scale(10) },
      { x: position, y: scale(17) },

      { x: trim - scale(25), y: height / 2 + scale(2) },
      { x: trim - scale(10), y: height / 2 + scale(10) },
      { x: trim, y: height / 2 + scale(10) },
      { x: trim + scale(10), y: height / 2 + scale(10) },
      { x: trim + scale(25), y: height / 2 + scale(2) },

      { x: circleWidth, y: scale(17) }, // border center right
      { x: circleWidth + scale(2), y: scale(10) },
      { x: circleWidth + scale(10), y: 0 },
      { x: circleWidth + scale(20), y: 0 },
    ]);

  return curved;
};

export const getPathDown = (width, iHeight, centerWidth) => {
  const height = scale(iHeight);
  const circleWidth = scale(centerWidth) + scale(16);
  return `${lineWithRoundedCorners(width, height)} ${lineCurvedDown(
    width / 2 - circleWidth / 2,
    height,
    circleWidth
  )}`;
};
