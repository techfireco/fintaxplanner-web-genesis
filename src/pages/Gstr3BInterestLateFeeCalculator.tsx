import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type TurnoverCat = "<=5cr" | ">5cr";
type StateGroup = "X" | "Y";

const INDIAN_STATES_GROUP_X = [
  "Chhattisgarh",
  "Madhya Pradesh",
  "Gujarat",
  "Maharashtra",
  "Goa",
  "Kerala",
  "Tamil Nadu",
  "Telangana",
  "Andhra Pradesh",
  "Daman and Diu and Dadra and Nagar Haveli",
  "Puducherry",
  "Andaman and Nicobar Islands",
  "Lakshadweep",
];
const INDIAN_STATES_GROUP_Y = [
  "Himachal Pradesh",
  "Punjab",
  "Uttarakhand",
  "Haryana",
  "Rajasthan",
  "Uttar Pradesh",
  "Bihar",
  "Sikkim",
  "Arunachal Pradesh",
  "Nagaland",
  "Manipur",
  "Mizoram",
  "Tripura",
  "Meghalaya",
  "Assam",
  "West Bengal",
  "Jharkhand",
  "Odisha",
  "Jammu and Kashmir",
  "Ladakh",
  "Chandigarh",
  "Delhi",
];
const ALL_STATES = [...INDIAN_STATES_GROUP_X, ...INDIAN_STATES_GROUP_Y].sort();

type PeriodKey =
  | "2020-02"
  | "2020-03"
  | "2020-04"
  | "2020-05"
  | "2020-06"
  | "2020-07"
  | "2020-08";

type ReliefWindow = {
  originalDue: string; // yyyy-mm-dd
  zeroEnd?: string; // inclusive boundary for 0%
  nineEnd?: string; // inclusive boundary for 9%
  lateFeeWaiverEnd?: string; // inclusive boundary for waiver
};

// Presets derived from the provided tables for Feb–Aug 2020
const PRESETS: Record<
  TurnoverCat,
  Record<StateGroup | "NA", Partial<Record<PeriodKey, ReliefWindow>>>
> = {
  "<=5cr": {
    X: {
      "2020-02": {
        originalDue: "2020-03-22",
        zeroEnd: "2020-06-30",
        nineEnd: "2020-09-30",
        lateFeeWaiverEnd: "2020-06-30",
      },
      "2020-03": {
        originalDue: "2020-04-22",
        zeroEnd: "2020-07-05",
        nineEnd: "2020-09-30",
        lateFeeWaiverEnd: "2020-07-03",
      },
      "2020-04": {
        originalDue: "2020-05-22",
        zeroEnd: "2020-07-09",
        nineEnd: "2020-09-30",
        lateFeeWaiverEnd: "2020-07-06",
      },
      "2020-05": {
        originalDue: "2020-07-12",
        zeroEnd: "2020-09-12",
        nineEnd: "2020-09-30",
        lateFeeWaiverEnd: "2020-09-12",
      },
      "2020-06": {
        originalDue: "2020-07-22",
        zeroEnd: "2020-09-23",
        nineEnd: "2020-09-29",
        lateFeeWaiverEnd: "2020-09-27",
      },
      "2020-07": {
        originalDue: "2020-08-22",
        zeroEnd: "2020-09-27",
        nineEnd: "2020-09-29",
        lateFeeWaiverEnd: "2020-09-27",
      },
      "2020-08": {
        originalDue: "2020-10-01",
        zeroEnd: "2020-10-01",
        nineEnd: undefined,
        lateFeeWaiverEnd: "2020-10-01",
      },
    },
    Y: {
      "2020-02": {
        originalDue: "2020-03-24",
        zeroEnd: "2020-06-30",
        nineEnd: "2020-09-30",
        lateFeeWaiverEnd: "2020-06-30",
      },
      "2020-03": {
        originalDue: "2020-04-24",
        zeroEnd: "2020-07-05",
        nineEnd: "2020-09-30",
        lateFeeWaiverEnd: "2020-07-05",
      },
      "2020-04": {
        originalDue: "2020-05-24",
        zeroEnd: "2020-07-09",
        nineEnd: "2020-09-30",
        lateFeeWaiverEnd: "2020-07-07",
      },
      "2020-05": {
        originalDue: "2020-07-14",
        zeroEnd: "2020-09-15",
        nineEnd: "2020-09-30",
        lateFeeWaiverEnd: "2020-09-15",
      },
      "2020-06": {
        originalDue: "2020-07-24",
        zeroEnd: "2020-09-25",
        nineEnd: "2020-09-29",
        lateFeeWaiverEnd: "2020-09-29",
      },
      "2020-07": {
        originalDue: "2020-08-24",
        zeroEnd: "2020-09-29",
        nineEnd: "2020-09-29",
        lateFeeWaiverEnd: "2020-09-29",
      },
      "2020-08": {
        originalDue: "2020-10-03",
        zeroEnd: "2020-10-03",
        nineEnd: undefined,
        lateFeeWaiverEnd: "2020-10-03",
      },
    },
    NA: {},
  },
  ">5cr": {
    NA: {
      "2020-02": {
        originalDue: "2020-03-20",
        zeroEnd: "2020-04-04",
        nineEnd: "2020-06-23",
        lateFeeWaiverEnd: "2020-06-24",
      },
      "2020-03": {
        originalDue: "2020-04-20",
        zeroEnd: "2020-05-05",
        nineEnd: "2020-06-23",
        lateFeeWaiverEnd: "2020-06-24",
      },
      "2020-04": {
        originalDue: "2020-05-20",
        zeroEnd: "2020-06-04",
        nineEnd: "2020-06-23",
        lateFeeWaiverEnd: "2020-06-24",
      },
      "2020-05": {
        originalDue: "2020-06-20",
        zeroEnd: "2020-06-27",
        nineEnd: "2020-06-23",
        lateFeeWaiverEnd: "2020-06-27",
      },
      "2020-06": {
        originalDue: "2020-07-20",
        zeroEnd: "2020-07-20",
        nineEnd: undefined,
        lateFeeWaiverEnd: "2020-07-20",
      },
      "2020-07": {
        originalDue: "2020-08-20",
        zeroEnd: "2020-08-20",
        nineEnd: undefined,
        lateFeeWaiverEnd: "2020-08-20",
      },
      "2020-08": {
        originalDue: "2020-09-20",
        zeroEnd: "2020-09-20",
        nineEnd: undefined,
        lateFeeWaiverEnd: "2020-09-20",
      },
    },
    X: {},
    Y: {},
  },
};

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 2,
});

function parseNumber(v: string) {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

function ymd(d: Date) {
  return d.toISOString().slice(0, 10);
}

function daysBetween(a: string, b: string) {
  if (!a || !b) return 0;
  const ad = new Date(a + "T00:00:00Z").getTime();
  const bd = new Date(b + "T00:00:00Z").getTime();
  return Math.max(0, Math.floor((bd - ad) / 86400000));
}

function isLeap(year: number) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export default function Gstr3BInterestLateFeeCalculator() {
  // Inputs
  const [state, setState] = useState<string>("Karnataka");
  const [turnover, setTurnover] = useState<TurnoverCat>(">5cr");
  const [period, setPeriod] = useState<PeriodKey>("2020-02");
  const [filedOn, setFiledOn] = useState<string>("2020-05-15");

  const [taxIGST, setTaxIGST] = useState("10000");
  const [taxCGST, setTaxCGST] = useState("2500");
  const [taxSGST, setTaxSGST] = useState("2500");
  const [taxCess, setTaxCess] = useState("1000");

  const [itcIGST, setItcIGST] = useState("6000");
  const [itcCGST, setItcCGST] = useState("500");
  const [itcSGST, setItcSGST] = useState("500");
  const [itcCess, setItcCess] = useState("100");

  const [nilReturn, setNilReturn] = useState(false);
  const [latePerDayNormal, setLatePerDayNormal] = useState("50"); // 25+25
  const [latePerDayNil, setLatePerDayNil] = useState("20"); // 10+10

  // Derived: state group
  const group: StateGroup | "NA" = useMemo(() => {
    if (turnover === ">5cr") return "NA";
    return INDIAN_STATES_GROUP_X.includes(state) ? "X" : "Y";
  }, [state, turnover]);

  // Autofill relief windows
  const [originalDue, setOriginalDue] = useState<string>("");
  const [zeroEnd, setZeroEnd] = useState<string>("");
  const [nineEnd, setNineEnd] = useState<string>("");
  const [lateWaiverEnd, setLateWaiverEnd] = useState<string>("");

  useEffect(() => {
    const preset = PRESETS[turnover][group]?.[period];
    setOriginalDue(preset?.originalDue ?? "");
    setZeroEnd(preset?.zeroEnd ?? "");
    setNineEnd(preset?.nineEnd ?? "");
    setLateWaiverEnd(preset?.lateFeeWaiverEnd ?? "");
  }, [turnover, group, period]);

  // Net cash tax (simple per-head: Liability - ITC, floored at 0)
  const cashIGST = Math.max(0, parseNumber(taxIGST) - parseNumber(itcIGST));
  const cashCGST = Math.max(0, parseNumber(taxCGST) - parseNumber(itcCGST));
  const cashSGST = Math.max(0, parseNumber(taxSGST) - parseNumber(itcSGST));
  const cashCess = Math.max(0, parseNumber(taxCess) - parseNumber(itcCess));
  const taxBase = cashIGST + cashCGST + cashSGST + cashCess;

  // Interest tiers based on windows and filing date
  const interestCalc = useMemo(() => {
    if (!filedOn || !originalDue) {
      return { days9: 0, days18: 0, rate9: 0.09, rate18: 0.18, interest: 0 };
    }

    const leapDen = isLeap(new Date(filedOn).getUTCFullYear()) ? 366 : 365;

    // Determine windows
    const zeroCut = zeroEnd || originalDue; // if no 0% window, treat as due date
    const nineCut = nineEnd || zeroCut; // if no 9% window, same as zeroCut
    const eighteenStart = ymd(
      new Date(new Date(nineCut + "T00:00:00Z").getTime() + 86400000)
    );

    // Filing within 0% window
    if (filedOn <= zeroCut) {
      return { days9: 0, days18: 0, rate9: 0.09, rate18: 0.18, interest: 0 };
    }

    // Filing within 9% window
    if (filedOn <= nineCut) {
      const d9 = daysBetween(zeroCut, filedOn);
      const interest = taxBase * 0.09 * (d9 / leapDen);
      return { days9: d9, days18: 0, rate9: 0.09, rate18: 0.18, interest };
    }

    // Filing after 9% window
    const d9 = daysBetween(zeroCut, nineCut);
    const d18 = daysBetween(eighteenStart, filedOn);
    const interest =
      taxBase * 0.09 * (d9 / leapDen) + taxBase * 0.18 * (d18 / leapDen);
    return { days9: d9, days18: d18, rate9: 0.09, rate18: 0.18, interest };
  }, [filedOn, originalDue, zeroEnd, nineEnd, taxBase]);

  // Late fee
  const lateFee = useMemo(() => {
    if (!filedOn || !lateWaiverEnd) return 0;
    if (filedOn <= lateWaiverEnd) return 0;
    const days = daysBetween(lateWaiverEnd, filedOn);
    const perDay = nilReturn
      ? parseNumber(latePerDayNil)
      : parseNumber(latePerDayNormal);
    return days * perDay;
  }, [filedOn, lateWaiverEnd, nilReturn, latePerDayNil, latePerDayNormal]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16 bg-brand-lightgray min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-brand-darkblue">
              GSTR-3B Interest and Late Fee Calculator
            </h1>
            <p className="text-gray-600 mt-2">
              Applies COVID relief windows (0% → 9% → 18%) based on turnover and
              State group; late fee waiver respected.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Return & Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>State</Label>
                    <Select value={state} onValueChange={setState}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        {ALL_STATES.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Turnover category</Label>
                    <Select
                      value={turnover}
                      onValueChange={(v) => setTurnover(v as TurnoverCat)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select turnover" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="<=5cr">Upto ₹5 crore</SelectItem>
                        <SelectItem value="> 5cr">Above ₹5 crore</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="text-xs text-muted-foreground mt-1">
                      State group: {group === "NA" ? "N/A" : `State ${group}`}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Tax period</Label>
                    <Select
                      value={period}
                      onValueChange={(v) => setPeriod(v as PeriodKey)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2020-02">Feb 2020</SelectItem>
                        <SelectItem value="2020-03">Mar 2020</SelectItem>
                        <SelectItem value="2020-04">Apr 2020</SelectItem>
                        <SelectItem value="2020-05">May 2020</SelectItem>
                        <SelectItem value="2020-06">Jun 2020</SelectItem>
                        <SelectItem value="2020-07">Jul 2020</SelectItem>
                        <SelectItem value="2020-08">Aug 2020</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Return filed on</Label>
                    <Input
                      type="date"
                      value={filedOn}
                      onChange={(e) => setFiledOn(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Original due date</Label>
                    <Input
                      type="date"
                      value={originalDue}
                      onChange={(e) => setOriginalDue(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>0% interest till</Label>
                    <Input
                      type="date"
                      value={zeroEnd}
                      onChange={(e) => setZeroEnd(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>9% interest till</Label>
                    <Input
                      type="date"
                      value={nineEnd}
                      onChange={(e) => setNineEnd(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>Late fee waiver till</Label>
                    <Input
                      type="date"
                      value={lateWaiverEnd}
                      onChange={(e) => setLateWaiverEnd(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Checkbox
                    id="nil"
                    checked={nilReturn}
                    onCheckedChange={(v) => setNilReturn(!!v)}
                  />
                  <Label htmlFor="nil">Nil return</Label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Late fee/day (normal)</Label>
                    <Input
                      type="number"
                      value={latePerDayNormal}
                      onChange={(e) => setLatePerDayNormal(e.target.value)}
                    />
                    <div className="text-xs text-muted-foreground">
                      Default: ₹50 (₹25 CGST + ₹25 SGST)
                    </div>
                  </div>
                  <div>
                    <Label>Late fee/day (nil)</Label>
                    <Input
                      type="number"
                      value={latePerDayNil}
                      onChange={(e) => setLatePerDayNil(e.target.value)}
                    />
                    <div className="text-xs text-muted-foreground">
                      Default: ₹20 (₹10 CGST + ₹10 SGST)
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tax Liability & ITC</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <Label>IGST liability (₹)</Label>
                    <Input
                      type="number"
                      value={taxIGST}
                      onChange={(e) => setTaxIGST(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>CGST liability (₹)</Label>
                    <Input
                      type="number"
                      value={taxCGST}
                      onChange={(e) => setTaxCGST(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>SGST liability (₹)</Label>
                    <Input
                      type="number"
                      value={taxSGST}
                      onChange={(e) => setTaxSGST(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>Cess liability (₹)</Label>
                    <Input
                      type="number"
                      value={taxCess}
                      onChange={(e) => setTaxCess(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <Label>ITC IGST (₹)</Label>
                    <Input
                      type="number"
                      value={itcIGST}
                      onChange={(e) => setItcIGST(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>ITC CGST (₹)</Label>
                    <Input
                      type="number"
                      value={itcCGST}
                      onChange={(e) => setItcCGST(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>ITC SGST (₹)</Label>
                    <Input
                      type="number"
                      value={itcSGST}
                      onChange={(e) => setItcSGST(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>ITC Cess (₹)</Label>
                    <Input
                      type="number"
                      value={itcCess}
                      onChange={(e) => setItcCess(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-600">Cash to be paid (IGST)</div>
                  <div className="text-right">{inr.format(cashIGST)}</div>
                  <div className="text-gray-600">Cash to be paid (CGST)</div>
                  <div className="text-right">{inr.format(cashCGST)}</div>
                  <div className="text-gray-600">Cash to be paid (SGST)</div>
                  <div className="text-right">{inr.format(cashSGST)}</div>
                  <div className="text-gray-600">Cash to be paid (Cess)</div>
                  <div className="text-right">{inr.format(cashCess)}</div>
                  <div className="text-gray-800 font-medium">Net cash tax base</div>
                  <div className="text-right font-medium">{inr.format(taxBase)}</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Calculation Windows</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-gray-600">Original due date</div>
                  <div className="text-right">{originalDue || "-"}</div>
                  <div className="text-gray-600">0% interest till</div>
                  <div className="text-right">{zeroEnd || "-"}</div>
                  <div className="text-gray-600">9% interest till</div>
                  <div className="text-right">{nineEnd || "-"}</div>
                  <div className="text-gray-600">Late fee waiver till</div>
                  <div className="text-right">{lateWaiverEnd || "-"}</div>
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  Interest days: 0% window excluded; 9% for days between 0%
                  end and 9% end; 18% thereafter.
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-gray-600">Days at 9%</div>
                  <div className="text-right">{interestCalc.days9}</div>
                  <div className="text-gray-600">Days at 18%</div>
                  <div className="text-right">{interestCalc.days18}</div>
                  <div className="text-gray-600 font-medium">Interest</div>
                  <div className="text-right font-medium">
                    {inr.format(interestCalc.interest || 0)}
                  </div>
                  <div className="text-gray-600">Late fee</div>
                  <div className="text-right">{inr.format(lateFee || 0)}</div>
                  <div className="text-gray-800 font-semibold">Grand total</div>
                  <div className="text-right font-semibold">
                    {inr.format((interestCalc.interest || 0) + (lateFee || 0))}
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    type="button"
                    onClick={() => {
                      setState("Karnataka");
                      setTurnover(">5cr");
                      setPeriod("2020-02");
                      setFiledOn("2020-05-15");
                      setTaxIGST("10000");
                      setTaxCGST("2500");
                      setTaxSGST("2500");
                      setTaxCess("1000");
                      setItcIGST("6000");
                      setItcCGST("500");
                      setItcSGST("500");
                      setItcCess("100");
                      setNilReturn(false);
                      setLatePerDayNormal("50");
                      setLatePerDayNil("20");
                    }}
                  >
                    Reset to example
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground">
                  For excess ITC claimed/excess reduction in liability, use 24%
                  p.a. separately as per GST rules.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}


