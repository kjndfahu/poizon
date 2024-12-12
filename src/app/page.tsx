import {InfoBlock} from "@/widgets/info-block";
import {CalculatorBlock} from "@/widgets/calculator-block";

export default function Home() {
  return (
    <div className="flex flex-col">
      <InfoBlock/>
        <CalculatorBlock/>
    </div>
  );
}
