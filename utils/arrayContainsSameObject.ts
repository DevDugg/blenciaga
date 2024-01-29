import { VariantsType } from "@/components/products/StyleSelect";

const arraysContainSameObjects = (
  array1: VariantsType[number]["selectedOptions"],
  array2: VariantsType[number]["selectedOptions"],
) => {
  if (array1.length !== array2.length) {
    return false; // Different lengths mean they cannot be the same
  }

  // Helper function to check if an object with the same name and value exists in the array
  const containsObject = (
    arr: VariantsType[number]["selectedOptions"],
    obj: VariantsType[number]["selectedOptions"][number],
  ) => arr.some((o) => o.name === obj.name && o.value === obj.value);

  // Check if every object in array1 exists in array2
  for (let obj of array1) {
    if (!containsObject(array2, obj)) {
      return false; // Found an object in array1 that's not in array2
    }
  }

  return true; // All objects in array1 are found in array2
};

export default arraysContainSameObjects;
