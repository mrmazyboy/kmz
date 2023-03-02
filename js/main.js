/* select */
const formSelects = document.querySelectorAll('.form-select');
const formSelectFields = document.querySelectorAll('.form-select__text-field');
const formSelectList = document.querySelectorAll('.form-select__list');

formSelects.forEach((item) => {
  const textField = item.querySelector('.form-select__text-field');

  item.addEventListener('click', function (event) {
    let target = event.target;
    textField.classList.add('_active')

    formSelectFields.forEach((field) => {
      if (field !== textField) {
        field.classList.remove('_active');
      }
    });

    while (target !== this) {
      if (target.classList.contains('form-select__item')) {
        textField.innerHTML = `<span>${target.textContent}</span>`;
        textField.classList.remove('_active')
        hideAllLists();
        return;
      }
      target = target.parentNode;
    }

    formSelectList.forEach((list) => {
      if (list !== this.querySelector('.form-select__list')) {
        list.style.display = 'none';
      }
    });

    let list = this.querySelector('.form-select__list');
    list.style.display = 'block';
    let listRect = list.getBoundingClientRect();
    let viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    if (listRect.bottom > viewportHeight) {
      list.style.top = 'auto';
      list.style.bottom = '105%';
    } else {
      list.style.top = '105%';
      list.style.bottom = 'auto';
    }

  });
});

document.addEventListener('click', function (event) {
  let target = event.target;
  if (!target.closest('.form-select')) {
    hideAllLists();
    rotateArrow();
  }
});

function hideAllLists() {
  formSelectList.forEach((list) => {
    list.style.display = 'none';
  });
}

function rotateArrow() {
  formSelectFields.forEach((field) => {
    field.classList.remove('_active')
  });
}

/* modal */
let orderModal = document.querySelector("#order-modal");
let successModal = document.querySelector("#success-modal");
let equipmentOrderModal = document.querySelector("#equipment-order-modal");

document.querySelectorAll(".js-request-call-button").forEach(function (el) {
  el.addEventListener("click", function (event) {
    modal.style.display = "flex";
    document.body.classList.add("_overflow-hidden");
    orderModal.style.display = "flex";
  });
});

document.querySelectorAll(".js-ordering-equipment-button").forEach(function (el) {
  el.addEventListener("click", function (event) {
    modal.style.display = "flex";
    document.body.classList.add("_overflow-hidden");
    equipmentOrderModal.style.display = "flex";
  });
});

let modal = document.querySelector(".modal");

document.querySelectorAll(".modal__button").forEach(function (el) {
  el.addEventListener("click", function (event) {
    if (event.target.classList.contains("modal__button")) {
      orderModal.style.display = "none";
      equipmentOrderModal.style.display = "none";
      successModal.style.display = "flex";
    }
  });
});

let closeButtons = document.querySelectorAll(".modal-dialog__close");

closeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    let modal = this.closest(".modal");
    modal.style.display = "none";
    orderModal.style.display = "none";
    equipmentOrderModal.style.display = "none";
    successModal.style.display = "none";
    document.body.classList.remove("_overflow-hidden");
  });
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    orderModal.style.display = "none";
    equipmentOrderModal.style.display = "none";
    successModal.style.display = "none";
    document.body.classList.remove("_overflow-hidden");
  }
};

/* category-list */
if (document.querySelector(".category__list") !== null) {
  const categoryList = document.querySelector('.category__list');
  const categoryItems = categoryList.querySelectorAll('.category__item');
  const categoryMore = document.querySelector('.category__more');
  
  categoryMore.addEventListener('click', (event) => {
    event.preventDefault();
    categoryItems.forEach(item => item.classList.remove('_hidden'));
    categoryMore.style.display = 'none';
  });
}

/* burger */
const body = document.querySelector('body');
const burger = document.querySelector(".burger");
const menuList = document.querySelector(".js-header-list");

burger.addEventListener('click', () => {
  burger.classList.toggle('_active')
  menuList.classList.toggle('_active')
  body.classList.toggle('_overflow-hidden')
})

/* tabs */ 
// let tabItemInputs = document.querySelectorAll('.tabs__item input')
// let tabItems = document.querySelectorAll('.tabs__item')

// tabItemInputs.forEach(function (el) {
//   el.addEventListener("change", function (event) {

//     tabItems.forEach((item) => {
//       item.classList.remove('_active')

//       if (event.target.checked) {
//         event.target.parentNode.classList.add("_active")
//       }
//     })
//   });
// });

/* gallery */
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

  if (document.querySelector(".gallery-slider") !== null) {
    let i;
    let slides = document.getElementsByClassName("slides__item");
    let dots = document.getElementsByClassName("demo");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
  }
}

/* search input */
if (document.querySelector(".search-input") !== null) {
  const searchInput = document.querySelector('.search-input');
  const formClearButton = searchInput.querySelector('.form-input-clear-button');

  formClearButton.onclick = function(e) {
    searchInput.querySelector(".form-control").value = "";
  }

  let searchButton = document.querySelector('.equipment-filter__form-button-search')
  let equipmentFilterForm = document.querySelector('.equipment-filter__form-row')

  searchButton.onclick = function(e) {
    equipmentFilterForm.classList.toggle('_active')
    searchInput.classList.toggle('_active')
  }
}

/* tabs */
const characteristics = document.querySelector('#characteristics');
const certificates = document.querySelector('#certificates');
const characteristicsContent = document.querySelector('#characteristics-content');
const certificatesContent = document.querySelector('#certificates-content');

if (characteristics) {
  characteristics.addEventListener('change', function () {
    if (this.checked) {
      characteristicsContent.classList.add('_active');
      certificatesContent.classList.remove('_active');
    }
  });
}

if (certificates) {
  certificates.addEventListener('change', function () {
    if (this.checked) {
      characteristicsContent.classList.remove('_active');
      certificatesContent.classList.add('_active');
    }
  });
}
