function uniquePath(path) {
  const segments = path?.split("/").filter(Boolean);
  for (let i = 0; i < segments.length; i++) {
    if (segments.length === 2 && segments[i] === segments[i + 1]) {
      return segments[0] + "/";
    }
  }
  return path;
}


export function getValidPaths(items) {
  return items?.flatMap((item) => {
    const paths = [];

    if (item?.label) {
      if (item.label !== "Overview") {
        const formattedTitle = `category/${item?.label.toLowerCase().replace(/\s+/g, "-")}`;
        paths.push(formattedTitle);
      }
    }

    if (item?.items) {
      paths.push(...getValidPaths(item?.items));
    } else if (typeof item === "string") {
      paths.push(uniquePath(item));
    }

    return paths;
  });
}
