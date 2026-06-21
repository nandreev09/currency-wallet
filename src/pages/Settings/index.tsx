import { useAppSelector } from "@/shared/hooks/redux";
import { selectTheme, selectBaseCurrency, selectTimeZone } from "@/features/settings/model/selectors";

function Settings() {
    const theme =
    useAppSelector(selectTheme);

const baseCurrency =
    useAppSelector(selectBaseCurrency);

const timeZone =
    useAppSelector(selectTimeZone);

    return (
        <section>
            <h2 className="mb-8 text-3xl font-bold">
                Settings
            </h2>

            <div className="space-y-4">
                <div className="rounded-xl bg-white p-6 shadow">
                    <h3 className="font-semibold">
                        Theme
                    </h3>

                    <p>{theme}</p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow">
                    <h3 className="font-semibold">
                        Base Currency
                    </h3>

                    <p>{baseCurrency}</p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow">
                    <h3 className="font-semibold">
                        Time Zone
                    </h3>

                    <p>{timeZone}</p>
                </div>
            </div>
        </section>
    );
}

export default Settings;