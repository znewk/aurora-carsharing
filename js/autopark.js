$('#carFilterBlock').hide();
let carFilterBlockHidden = true;

function openFilterBlock() {
    if (carFilterBlockHidden) {
        $('#carFilterBlock').slideDown();
        carFilterBlockHidden = false;
    } else {
        $('#carFilterBlock').slideUp();
        carFilterBlockHidden = true;
    }
}

class Car {
    #carBrand;
    #carModel;
    #carDesc;
    #carBody;
    #carColor;
    #carYear;
    #carVolume;
    #carCity;
    #carPrice;
    #passengersCount;
    #carTransmission;
    #carDriveUnit;
    #carPhotoSrc1;
    #carPhotoSrc2;
    constructor(newCarBrand,
        newCarModel,
        newCarDesc,
        newCarBody,
        newCarColor,
        newCarYear,
        newCarVolume,
        newCarCity,
        newCarPrice,
        newPassengersCount,
        newCarTransmission,
        newCarDriveUnit,
        newCarPhotoSrc1,
        newCarPhotoSrc2) {
        this.#carBrand = newCarBrand;
        this.#carModel = newCarModel;
        this.#carDesc = newCarDesc;
        this.#carBody = newCarBody;
        this.#carBrand = newCarBrand;
        this.#carColor = newCarColor;
        this.#carYear = newCarYear;
        this.#carVolume = newCarVolume;
        this.#carCity = newCarCity;
        this.#carPrice = newCarPrice;
        this.#passengersCount = newPassengersCount;
        this.#carTransmission = newCarTransmission;
        this.#carDriveUnit = newCarDriveUnit;
        this.#carPhotoSrc1 = newCarPhotoSrc1;
        this.#carPhotoSrc2 = newCarPhotoSrc2;
    }
    get carBrand() {
        return this.#carBrand;
    }
    set carBrand(newCarBrand) {
        this.#carBrand = newCarBrand;
    }

    get carModel() {
        return this.#carModel;
    }
    set carModel(newCarModel) {
        this.#carModel = newCarModel;
    }

    get carBody() {
        return this.#carBody;
    }
    set carBody(newCarBody) {
        this.#carBody = newCarBody;
    }

    get carColor() {
        return this.#carColor;
    }
    set carColor(newCarColor) {
        this.#carColor = newCarColor;
    }

    get carYear() {
        return this.#carYear;
    }
    set carYear(newCarYear) {
        this.#carYear = newCarYear;
    }

    get carVolume() {
        return this.#carVolume;
    }
    set carVolume(newCarVolume) {
        this.#carVolume = newCarVolume;
    }

    get carCity() {
        return this.#carCity;
    }
    set carCity(newCarCity) {
        this.#carCity = newCarCity;
    }

    get carPrice() {
        return this.#carPrice;
    }
    set carPrice(newCarPrice) {
        this.#carPrice = newCarPrice;
    }

    get passengersCount() {
        return this.#passengersCount;
    }
    set passengersCount(newPassengersCount) {
        this.#passengersCount = newPassengersCount;
    }

    get carTransmission() {
        return this.#carTransmission;
    }
    set carTransmission(newCarTransmission) {
        this.#carTransmission = newCarTransmission;
    }

    get carDriveUnit() {
        return this.#carDriveUnit;
    }
    set carDriveUnit(newCarDriveUnit) {
        this.#carDriveUnit = newCarDriveUnit;
    }

    get carDesc() {
        return this.#carDesc;
    }
    set carDesc(newCarDesc) {
        this.#carDesc = newCarDesc;
    }

    get carPhotoSrc1() {
        return this.#carPhotoSrc1;
    }
    set carPhotoSrc1(newCarPhotoSrc1) {
        this.#carPhotoSrc1 = newCarPhotoSrc1;
    }

    get carPhotoSrc2() {
        return this.#carPhotoSrc2;
    }
    set carPhotoSrc2(newCarPhotoSrc2) {
        this.#carPhotoSrc2 = newCarPhotoSrc2;
    }
}

let autopark = [
    new Car('TOYOTA', 'YARIS CROSS', 'Кроссовер для большого города. Создан для комфортных поездок.', 'Кроссовер', 'Желтый', 2015, 1.6, 'Нур-Султан', 799, 5, 'АКПП', 'Полный', 'toyota_yaris_cross.png', 'toyota_yaris_cross.png'),
    new Car('NISSAN', 'MAGNITE', 'Бери, крутая тачка.', 'Кроссовер', 'Красный', 2015, 3.5, 'Алматы', 990, 5, 'АКПП', 'Полный', 'nissan_magnite.png', 'nissan_magnite_back.png'),
    new Car('BRUICK', 'LACROSSE', 'Супер машина, бери.', 'Седан', 'Красный', 2015, 1.6, 'Алматы', 890, 4, 'АКПП', 'Полный', 'bruick_lacrosse.png', 'bruick_lacrosse.png')

]

let carsSliderBlock = $('#carsSliderBlock')
let carInfoBlock = $('#carInfoBlock')

let OpenCar = (infoCarBrand,
    infoCarModel,
    infoCarDesc,
    infoCarBody,
    infoCarColor,
    infoCarYear,
    infoCarVolume,
    infoCarCity,
    infoCarPrice,
    infoPassengersCount,
    infoCarTransmission,
    infoCarDriveUnit,
    infoCarPhotoSrc1,
    infoCarPhotoSrc2) => {
    carInfoBlock.empty()
    carInfoBlock.append(`
        <div class="carInfoModelBlock">
        <span class="carInfoBrand">${infoCarBrand}</span>
        <span class="carInfoModel">${infoCarModel}</span>
        <span class="carInfoDesc">${infoCarDesc}</span>
    </div>
    <div class="carInfoPriceBlock">
        <span class="carInfoPrice">${infoCarPrice}KZT/Час</span>
    </div>
</div>

<div class="carSlider">
    <div class="single-item photosBlock">
        <img src="./media/cars/${infoCarPhotoSrc1}" alt="" class="carPhotoBigSlider">
        <img src="./media/cars/${infoCarPhotoSrc2}" alt="" class="carPhotoBigSlider">
    </div>

</div>

<div class="carCriteriesBody">
    <span class="carCriteries">
        Город: <br>
        Год выпуска: <br>
        Тип кузова: <br>
        Привод: <br>
        Количество пассажиров: <br>
        Объем двигателя: <br>
        Коробка передач: <br>
        Цвет кузова: <br>
    </span>
    <span class="carCriteries carCriteriesValue">
    ${infoCarCity} <br>
    ${infoCarYear} <br>
    ${infoCarBody} <br>
    ${infoCarDriveUnit} <br>
    ${infoPassengersCount} <br>
    ${infoCarVolume} <br>
    ${infoCarTransmission} <br>
    ${infoCarColor} <br>
    </span>
</div>
        `)
}

for (i = 0; i < autopark.length; i++) {
    let forCarBrand = autopark[i].carBrand;
    let forcarModel = autopark[i].carModel;
    let forCarDesc = autopark[i].carDesc;
    let forCarBody = autopark[i].carBody;
    let forCarColor = autopark[i].carColor;
    let forCarYear = autopark[i].carYear;
    let forCarVolume = autopark[i].carVolume;
    let forCarCity = autopark[i].carCity;
    let forCarPrice = autopark[i].carPrice
    let forPassengersCount = autopark[i].passengersCount
    let forCarTransmission = autopark[i].carTransmission
    let forCarDriveUnit = autopark[i].carDriveUnit
    let forCarPhotoSrc1 = autopark[i].carPhotoSrc1
    let forCarPhotoSrc2 = autopark[i].carPhotoSrc2
    carsSliderBlock.append(`
    <div class="carCard">
        <div class="carCardPhotoBody">
            <img src="./media/cars/${autopark[i].carPhotoSrc1}" alt="" class="carCardPhoto">
        </div>
        <div class="carCardInfoBody">
            <div class="carCardInfoTitleBlock">
                <span class="carCardTitle">${autopark[i].carBrand} ${autopark[i].carModel}</span>
            </div>
            <div class="carCardInfoFooter">
                <span class="carCardDesc">${autopark[i].carDesc}</span>
                <span class="carCardPrice">${autopark[i].carPrice}KZT/Час</span>
            </div>
        </div>
    </div>
    `)

    let carCard = document.getElementsByClassName('carCard')[i]

    carCard.addEventListener("click", function () {
        OpenCar(
            forCarBrand,
            forcarModel,
            forCarDesc,
            forCarBody,
            forCarColor,
            forCarYear,
            forCarVolume,
            forCarCity,
            forCarPrice,
            forPassengersCount,
            forCarTransmission,
            forCarDriveUnit,
            forCarPhotoSrc1,
            forCarPhotoSrc2
        )
    })
}