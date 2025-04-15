const handleTasks = () => {
  const form = document.querySelector("#formElement");
  const tasksContainer = document.querySelector("#tasksContainer");

  if (!form || !tasksContainer) return;

  //initial state
  //local storage
  const tasks = [
    {
      message: "task 1",
      completed: false,
    },
    {
      message: "task 2",
      completed: false,
    },
  ];

  console.log("tasks", tasks);

  for (let index = 0; index < tasks.length; index++) {
    const task = tasks[index];

    tasksContainer.insertAdjacentHTML(
      "beforeend",
      `<li class="task-item">
                <button>
                    <!-- SVG -->
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.9643 4.85958C13.3765 4.85958 14.7571 5.27836 15.9313 6.06297C17.1056 6.84757 18.0208 7.96277 18.5612 9.26752C19.1017 10.5723 19.2431 12.008 18.9676 13.3931C18.6921 14.7782 18.012 16.0505 17.0134 17.0492C16.0148 18.0478 14.7424 18.7278 13.3573 19.0034C11.9722 19.2789 10.5365 19.1375 9.23173 18.597C7.92697 18.0566 6.81178 17.1414 6.02717 15.9671C5.24257 14.7929 4.82378 13.4123 4.82378 12.0001C4.8311 10.1085 5.58574 8.29658 6.92326 6.95906C8.26079 5.62154 10.0728 4.86689 11.9643 4.85958ZM11.9643 3.2728C10.2397 3.27986 8.55592 3.79769 7.12543 4.76093C5.69494 5.72418 4.58191 7.08964 3.92683 8.68495C3.27176 10.2803 3.10401 12.0339 3.44478 13.7245C3.78554 15.415 4.61954 16.9667 5.84148 18.1837C7.06342 19.4007 8.61852 20.2283 10.3105 20.5622C12.0024 20.896 13.7553 20.7211 15.348 20.0595C16.9406 19.398 18.3015 18.2794 19.2589 16.845C20.2163 15.4105 20.7272 13.7246 20.7273 12.0001C20.7273 10.851 20.5003 9.7132 20.0595 8.65202C19.6187 7.59085 18.9727 6.62717 18.1585 5.8163C17.3443 5.00543 16.378 4.36333 15.315 3.92685C14.2521 3.49037 13.1134 3.2681 11.9643 3.2728Z"
                            fill="#7B7B7B" />
                    </svg>

                </button>
                <p>
                    ${task.message}
                </p>
                <button>
                    <!-- SVG REMOVE BTN -->
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.20214 4.98548H6.87158V10.5073H8.20214V4.98548Z" fill="#808080" />
                        <path d="M5.46239 4.98548H4.13184V10.5073H5.46239V4.98548Z" fill="#808080" />
                        <path
                            d="M12.478 2.16712C12.4754 2.03061 12.4295 1.89846 12.3469 1.78975C12.2642 1.68104 12.1492 1.6014 12.0184 1.56232C11.9596 1.53782 11.8974 1.52252 11.8339 1.51696H8.28678C8.1525 1.07791 7.88082 0.693554 7.51174 0.420471C7.14265 0.147388 6.69564 0 6.23651 0C5.77738 0 5.33038 0.147388 4.96129 0.420471C4.5922 0.693554 4.32053 1.07791 4.18625 1.51696H0.639107C0.580679 1.51814 0.522686 1.52729 0.46674 1.54418H0.45162C0.313182 1.58701 0.193338 1.67547 0.11163 1.79515C0.0299214 1.91483 -0.00883041 2.05866 0.00169348 2.20319C0.0122174 2.34771 0.071396 2.48441 0.169579 2.59099C0.267763 2.69757 0.399158 2.76774 0.542339 2.79006L1.25298 12.5334C1.26382 12.9127 1.41693 13.2741 1.68191 13.5458C1.94688 13.8175 2.30435 13.9797 2.68332 14H9.78668C10.1662 13.9804 10.5244 13.8186 10.79 13.5468C11.0556 13.2751 11.2092 12.9132 11.22 12.5334L11.9277 2.79914C12.0802 2.77797 12.22 2.70232 12.3212 2.58615C12.4223 2.46999 12.478 2.32116 12.478 2.16712ZM6.23651 1.21456C6.3661 1.21458 6.49427 1.24146 6.61294 1.29351C6.73161 1.34556 6.8382 1.42164 6.92598 1.51696H5.54704C5.63459 1.42135 5.74114 1.34507 5.85986 1.29299C5.97859 1.24092 6.10687 1.21421 6.23651 1.21456ZM9.78668 12.7904H2.68332C2.60168 12.7904 2.47467 12.6573 2.45955 12.4457L1.75798 2.81123H10.715L10.0135 12.4457C9.99836 12.6573 9.87135 12.7904 9.78668 12.7904Z"
                            fill="#808080" />
                    </svg>

                </button>
            </li>`
    );
  }
};

window.addEventListener("load", handleTasks);
