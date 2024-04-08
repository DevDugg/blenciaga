export interface ColorBlockProps {
  color: string;
}
type Color = {
  name: string;
  value: string;
};

const ColorBlock = ({ color }: ColorBlockProps) => {
  const colorsArray: Color[] = [
    { name: "BLACK", value: "#000000" },
    { name: "WHITE", value: "#FDFDFD" },
    { name: "RED", value: "#FFCDD2" },
    { name: "BLUE", value: "#BBDEFB" },
    { name: "YELLOW", value: "#FFF9C4" },
    { name: "GREEN", value: "#C8E6C9" },
    { name: "ORANGE", value: "#FFD180" },
    { name: "PURPLE", value: "#E1BEE7" },
    { name: "PINK", value: "#F8BBD0" },
    { name: "TEAL", value: "#80CBC4" },
    { name: "LAVENDER", value: "#D1C4E9" },
    { name: "MINT", value: "#AED581" },
    { name: "CORAL", value: "#FFAB91" },
    { name: "INDIGO", value: "#9FA8DA" },
    { name: "PEACH", value: "#FFCCBC" },
    { name: "TURQUOISE", value: "#80DEEA" },
  ];

  const detectColorFromString = (input: string): Color | null => {
    const lowercasedInput = input.toLowerCase();

    for (const color of colorsArray) {
      if (lowercasedInput.includes(color.name.toLowerCase()) || lowercasedInput.includes(color.value.toLowerCase())) {
        return color;
      }
    }

    return null;
  };

  const detectedColor = detectColorFromString(color);

  return (
    detectedColor && (
      <div
        className="color-block w-4 h-4 border border-[#000000] rounded-sm"
        style={{ background: detectedColor.value }}
      ></div>
    )
  );
};
export default ColorBlock;
