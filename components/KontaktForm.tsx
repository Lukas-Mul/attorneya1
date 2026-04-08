"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const oblasti = [
  "Závazkové právo",
  "Právo obchodních společností",
  "Směnečné a šekové právo",
  "Právní vztahy k nemovitostem",
  "Bytové právo",
  "Ochrana spotřebitele",
  "Rodinné právo",
  "Pracovní právo",
  "Právo duševního vlastnictví",
  "Trestní právo",
  "Jiné / nevím",
];

type Status = "idle" | "sending" | "success" | "error";

export default function KontaktForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          Object.fromEntries(data.entries()) as Record<string, string>
        ).toString(),
      });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-white border border-[#e5e7eb] rounded-[5px] h-full min-h-[480px]">
        <div className="w-14 h-14 rounded-full bg-[#f0f9f0] flex items-center justify-center mb-5">
          <CheckCircle size={28} className="text-green-600" strokeWidth={1.5} />
        </div>
        <h3 className="font-serif text-xl font-semibold text-[#0a1f44] mb-3">
          Zpráva odeslána
        </h3>
        <p className="text-[#6b7280] text-sm leading-relaxed max-w-xs">
          Děkujeme za vaši zprávu. Ozveme se vám co nejdříve, zpravidla do jednoho pracovního dne.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm text-[#0a1f44] underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          Odeslat další zprávu
        </button>
      </div>
    );
  }

  return (
    <form
      name="kontakt"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="bg-white border border-[#e5e7eb] rounded-[5px] p-8 shadow-sm h-full flex flex-col"
    >
      {/* Netlify hidden field */}
      <input type="hidden" name="form-name" value="kontakt" />

      <h3 className="font-serif text-xl font-semibold text-[#0a1f44] mb-6">
        Napište nám
      </h3>

      <div className="flex flex-col gap-5 flex-1">
        {/* Name + Email row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-medium text-[#6b7280] uppercase tracking-wide mb-2">
              Jméno <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="jmeno"
              required
              placeholder="Vaše jméno"
              className="w-full px-4 py-3 border border-[#e5e7eb] rounded-[5px] text-sm text-[#1a1a1a] placeholder:text-[#c4c7cf] focus:outline-none focus:border-[#0a1f44] transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-[#6b7280] uppercase tracking-wide mb-2">
              E-mail <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="vas@email.cz"
              className="w-full px-4 py-3 border border-[#e5e7eb] rounded-[5px] text-sm text-[#1a1a1a] placeholder:text-[#c4c7cf] focus:outline-none focus:border-[#0a1f44] transition-colors"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-medium text-[#6b7280] uppercase tracking-wide mb-2">
            Telefon <span className="text-[#c4c7cf] font-normal">(nepovinné)</span>
          </label>
          <input
            type="tel"
            name="telefon"
            placeholder="+420 000 000 000"
            className="w-full px-4 py-3 border border-[#e5e7eb] rounded-[5px] text-sm text-[#1a1a1a] placeholder:text-[#c4c7cf] focus:outline-none focus:border-[#0a1f44] transition-colors"
          />
        </div>

        {/* Oblast */}
        <div>
          <label className="block text-xs font-medium text-[#6b7280] uppercase tracking-wide mb-2">
            Oblast práva
          </label>
          <select
            name="oblast"
            defaultValue=""
            className="w-full px-4 py-3 border border-[#e5e7eb] rounded-[5px] text-sm text-[#1a1a1a] focus:outline-none focus:border-[#0a1f44] transition-colors bg-white appearance-none"
          >
            <option value="" disabled>
              Vyberte oblast (nepovinné)
            </option>
            {oblasti.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col flex-1">
          <label className="block text-xs font-medium text-[#6b7280] uppercase tracking-wide mb-2">
            Zpráva <span className="text-red-400">*</span>
          </label>
          <textarea
            name="zprava"
            required
            rows={5}
            placeholder="Stručně popište váš případ nebo dotaz..."
            className="w-full flex-1 min-h-[120px] px-4 py-3 border border-[#e5e7eb] rounded-[5px] text-sm text-[#1a1a1a] placeholder:text-[#c4c7cf] focus:outline-none focus:border-[#0a1f44] transition-colors resize-none"
          />
        </div>

        {/* Error */}
        {status === "error" && (
          <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-100 rounded-[5px] px-4 py-3">
            <AlertCircle size={16} strokeWidth={1.5} />
            Nepodařilo se odeslat zprávu. Zkuste to prosím znovu nebo nás kontaktujte telefonicky.
          </div>
        )}

        {/* GDPR note */}
        <p className="text-xs text-[#9ca3af] leading-relaxed">
          Odesláním souhlasíte se zpracováním osobních údajů za účelem vyřízení vašeho
          dotazu. Údaje nebudou poskytnuty třetím stranám.
        </p>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-[#0a1f44] text-white text-sm font-medium rounded-[5px] hover:bg-[#061530] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? (
            "Odesílám…"
          ) : (
            <>
              Odeslat zprávu
              <Send size={15} strokeWidth={1.5} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
