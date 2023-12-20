interface LeadProps {}

export const Lead = ({}: LeadProps) => {
  return (
    <section className="pt-[100px] sm:pt-32">
      <div className="max-w-screen-lg w-full">
        <p className="text-2xl font-normal sm:text-5xl">
          Для доступа к эксклюзивным распродажам, участия в специальных
          мероприятиях и получения персонализированных предложений, просим Вас
          заполнить следующие поля анкеты.
        </p>
      </div>
    </section>
  );
};
