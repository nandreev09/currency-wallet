interface AddCurrencyButtonProps {
    onClick: () => void;
}

const AddCurrencyButton = ({
    onClick,
}: AddCurrencyButtonProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="
                rounded-md
                bg-blue-600
                px-4
                py-2
                text-white
                transition-colors
                hover:bg-blue-700
            "
        >
            Add Currency
        </button>
    );
};

export default AddCurrencyButton;