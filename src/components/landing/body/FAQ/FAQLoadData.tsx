import React from "react";
import FAQ from "@/components/landing/body/FAQ/FAQ";
import { getFAQData } from "@/apis/getSheetsData";

// TEMPORARY: This is a temporary component to load FAQ data, need to resolve this

// NOTE: data fetching is done here, not sure if this is desired structure
const OriginalFAQ = async () => {
    const faq = await getFAQData();
    return (
        <main>
            <div className="flex flex-col align-center">
                <FAQ faq={faq}/>
            </div>
        </main>
    );
};

export default OriginalFAQ;
