import { useAppSelector } from "@/shared/hooks/redux";

function Settings() {
    const settings = useAppSelector(
        (state) => state.settings
    );

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

                    <p>{settings.theme}</p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow">
                    <h3 className="font-semibold">
                        Base Currency
                    </h3>

                    <p>{settings.baseCurrency}</p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow">
                    <h3 className="font-semibold">
                        Time Zone
                    </h3>

                    <p>{settings.timeZone}</p>
                </div>
            </div>
        </section>
    );
}

export default Settings;