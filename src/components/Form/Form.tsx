import React, { FC, useState } from "react";
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.kz";
import { ArrowRight } from "../Icons/ArrowRight";
import { SuccessMessage } from "../SuccessMessage";
import { Loader } from "../Loader";

interface FormProps {}

export const Form: FC = ({}: FormProps) => {
  const baseUrl =
    "https://script.google.com/macros/s/AKfycbzyK_pkJD1Gf36iutPhqUTTwl1FVaKZ3wthAX7nYvqWxJbC1L2tGLkEJNoPAeuJ-YIk/exec";
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    day: "",
    month: "",
    year: "",
    email: "",
    phone: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const options = {
    phone: true,
    phoneRegionCode: "KZ",
    prefix: "",
    delimiter: "-",
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({ ...state, [event.target.name]: event.target.value }));
  };

  const resetForm = () => {
    setForm({
      name: "",
      lastName: "",
      day: "",
      month: "",
      year: "",
      email: "",
      phone: "",
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setIsLoading(true);

    const _formData = new FormData();

    _formData.append("Имя", form.name);
    _formData.append("Фамилия", form.lastName);
    _formData.append("День Рождения", `${form.day}-${form.month}-${form.year}`);
    _formData.append("Почта", form.email);
    _formData.append("Телефон", `+7${form.phone}`);

    fetch(baseUrl, {
      method: "POST",
      body: _formData,
    })
      .then(() => resetForm())
      .then(() => setIsSuccess(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="pt-16 sm:pt-[128px]">
      <div className="max-w-[1440px] w-full my-0 mx-auto">
        <form
          onSubmit={handleSubmit}
          className="max-w-[820px] w-full flex flex-col gap-8"
        >
          <div className="flex max-[567px]:flex-col gap-6">
            <div className="flex gap-2 w-full">
              <label className="w-full">
                <span className="px-6">Имя</span>
                <input
                  value={form.name}
                  name="name"
                  required
                  type="text"
                  placeholder="Имя*"
                  onChange={onChange}
                  className="py-4 px-8 w-full rounded-full border border-green-800 placeholder-gray-400 mt-2"
                />
              </label>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label>
                <span className="px-6">Фамилия</span>
                <input
                  required
                  value={form.lastName}
                  name="lastName"
                  type="text"
                  placeholder="Фамилия*"
                  onChange={onChange}
                  className="py-4 px-8 w-full rounded-full border border-green-800 placeholder-gray-400 mt-2"
                />
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label>
              <span className="px-6">День рождения</span>
              <div className="flex gap-2 mt-2">
                <input
                  value={form.day}
                  name="day"
                  placeholder="DD"
                  maxLength={2}
                  minLength={2}
                  onChange={onChange}
                  className="py-4 px-8 max-w-[168px] w-full rounded-full border border-green-800 placeholder-gray-400"
                />
                <input
                  value={form.month}
                  name="month"
                  placeholder="MM"
                  maxLength={2}
                  minLength={2}
                  onChange={onChange}
                  className="py-4 px-8 max-w-[168px] w-full rounded-full border border-green-800 placeholder-gray-400"
                />
                <input
                  value={form.year}
                  name="year"
                  placeholder="YYYY"
                  maxLength={4}
                  minLength={4}
                  onChange={onChange}
                  className="py-4 px-8 w-full rounded-full border border-green-800 placeholder-gray-400"
                />
              </div>
            </label>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label>
              <span className="px-6">Электронная почта</span>
              <input
                required
                type="email"
                value={form.email}
                name="email"
                onChange={onChange}
                placeholder="Электронная почта"
                className="py-4 px-8 w-full rounded-full border border-green-800 placeholder-gray-400 mt-2"
              />
            </label>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label>
              <span className="px-6">Номер телефона</span>
              <div className="flex gap-1 items-center mt-2">
                <span className="py-4 px-8 rounded-full border border-green-800 placeholder-gray-400">
                  +7
                </span>
                <Cleave
                  name="phone"
                  value={form.phone}
                  options={options}
                  onChange={onChange}
                  placeholder="000 000 00 00"
                  className="py-4 px-8 w-full rounded-full border border-green-800 placeholder-gray-400"
                />
              </div>
            </label>
          </div>

          <p className="text-base opacity-50">
            Это пространство, наполненное ощущением волшебства и праздника,
            расположено в самом сердце Алматы. Здесь каждый визит превращается в
            незабываемое знакомство с лучшими коллекциями столового текстиля и
            аксессуаров для изысканной сервировки стола. Подтарельники, салфетки
            и скатерти, созданные полностью вручную, способны украсить и
            превратить каждый ваш день в незабываемый праздник.Это пространство,
            наполненное ощущением волшебства и праздника, расположено в самом
            сердце Алматы. Здесь каждый визит превращается в незабываемое
            знакомство с лучшими коллекциями столового текстиля и аксессуаров
            для изысканной сервировки стола. Подтарельники, салфетки и скатерти,
            созданные полностью вручную, способны украсить и превратить каждый
            ваш день в незабываемый праздник.
          </p>

          <label className="flex items-center gap-3">
            <input
              required
              type="checkbox"
              name="checkBox"
              className="w-3.5 h-3.5 border border-black rounded-full"
            />
            <p className="text-sm sm:text-base">
              Подтверждаю согласие на получение информации об акциях и новостях
            </p>
          </label>

          {isSuccess && <SuccessMessage />}
          <button
            className="flex items-center justify-center border rounded-2xl border-black gap-2 py-3 mt-8 sm:max-w-[368px] transition duration-300 ease-in-out hover:opacity-50"
            type="submit"
          >
            {!isLoading ? (
              <>
                <ArrowRight />
                Коллекция
              </>
            ) : (
              <Loader />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
