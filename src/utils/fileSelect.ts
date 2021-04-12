export const fileSelect = () => {
  return new Promise<File>((resolve, reject) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = false;
    input.onchange = () => {
      if (input.files.length > 0) {
        resolve(input.files[0]);
      } else {
        reject('no file selected');
      }
    };
    input.click();
  });
};
