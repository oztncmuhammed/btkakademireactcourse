export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour < closeHour;
  console.log(isOpen);

  //&& kullanılıyorsa eğer ifade doğru ise sonraki ifadeyi render eder değilse etmez
  return (
    <footer>
      {isOpen ? (
        <p> Akşam {closeHour}' e kadar sipariş verebilirsniz!! </p>
      ) : (
        <p> Mağaza şuan kapali, açiliş saatimiz {openHour}. </p>
      )}
    </footer>
  );
}
