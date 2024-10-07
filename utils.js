export function getValidPaths(items) {
    return items?.flatMap((item) =>
      item?.items ? getValidPaths(item?.items) : item
    );
  }
  
