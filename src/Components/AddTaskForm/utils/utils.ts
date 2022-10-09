function formatMax(task: string) {
  const max = 28;
  const taskLength = task.length;

  if (taskLength >= max) {
    const part = task.substring(0, max - 3);
    return `${part}...`;
  } else {
    return task;
  }
}

export { formatMax };
