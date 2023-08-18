import React from "react";

import Container from "./../../components/layout/Container";

const PrivacyPolicy = () => {
  return (
    <>
      <Container>
        <div className="flex justify-center items-center">
          <h1 className=" text-white text-6xl font-bold">Privacy Policy</h1>
        </div>
        <div className=" flex items-center justify-center">
          <card className="w-90 mt-10 rounded-lg border shadow-md flex flex-col p-5 bg-white">
            {/* Top Section */}
            <div className="flex flex-col items-start">
              <p className="mt-4 text-sm text-blue-600">
                {" "}
                Last Updated 19 August 2023{" "}
              </p>
              {/* Line */}
              <div className="h-0.5 bg-gray-200 w-full my-5"> </div>
            </div>
            {/* Bottom Section */}
            <div className="flex flex-col px-3">
              <div className="grid grid-cols-4 mt-3 gap-y-2">
                {/* Details 1 */}

                <div className="col-span-4 text-lg font-semibold text-black">
                  Digital Tech Services and its subsidiaries and affiliates
                  (“We”, “Our”, “Us” or “PDM”) works to maintain a high standard
                  of data privacy in accordance with your data protection rights
                  under applicable law. The protection and proper use of the
                  personal information that you entrust to Us is a
                  responsibility We take seriously. This privacy notice explains
                  what personal information We may collect through
                  https://digitaltech.services/ (“Site”), how We may use it, and
                  the rights that you have concerning that data (“Privacy
                  Notice”).
                </div>
                {/* Details 2 */}

                <div className="col-span-4 text-lg font-semibold text-black">
                  We provide access to our Site and related information,
                  services and features, (“Services”) to you conditioned upon your acceptance of all
                  terms, conditions, policies and notices stated in this Privacy
                  Notice and our Terms of Use found here:
                  https://digitaltech.services/terms/ (“Terms of
                  Use”). By providing your Personal Information or using the
                  Site you consent to the practices set forth in this Privacy
                  Notice, the Terms of Use and to Our collection, processing,
                  transfer or use of your Personal Information. If you do not
                  consent to any collection, processing, transfer or use of such
                  information, please do not use or access any part of the Site
                  or submit Personal Information.
                </div>

                {/* Details 3 */}
                <div className="col-span-4  font-bold text-3xl mt-10 text-purple-700">
                  GENERAL
                </div>
                <div className="col-span-4 text-lg font-semibold text-black">
                  When you provide personal information about yourself through
                  the Sites, We only process your personal information when We
                  have a lawful basis to do so. We collect certain information
                  that identifies, relates to, describes, is reasonably capable
                  of being associated with, or could reasonably be linked,
                  directly or indirectly, with a consumer or household
                  (“Personal Information”). Personal Information does not
                  include de-identified or aggregated consumer information. We
                  collect Personal Information from individuals visiting our
                  Site, including as you browse our Site.
                </div>
                {/* Details 4 */}

                <div className="col-span-4 text-lg font-semibold text-black">
                  By accessing the Site, you acknowledge this Privacy Notice and
                  agree to be bound by the terms hereof.
                </div>

                <div className="col-span-4 text-lg font-semibold text-black">
                  Our legal bases for processing your Personal Information
                  include: (1) your consent; (2) fulfilment of a contractual
                  obligation; and (3) where We have a legitimate interest to
                  process your Personal Information consistent with applicable
                  law. Our legitimate interests include:
                </div>

                <div className="pl-2"> </div>

                <div className="col-span-4 text-lg font-semibold text-black">
                  Investigating, preventing, and protecting against fraud,
                  security risks, threats to you and others, and violations of
                  this Privacy Notice;
                </div>

                <div className="col-span-4 text-lg font-semibold text-black">
                  Protecting and defending our rights and properties, including
                  intellectual property;
                </div>

                <div className="col-span-4 text-lg font-semibold text-black">
                  Complying with laws and regulations that apply to Us, as well
                  as responding to requests from law enforcement or government
                  authorities or as otherwise required by law;
                </div>

                <div className="col-span-4 text-lg font-semibold text-black">
                  Improving your experiences with our Site;
                </div>

                <div className="col-span-4 text-lg font-semibold text-black">
                  Understanding and improving our Site, user experience, and
                  customer relationships; and
                </div>

                <div className="col-span-4 text-lg font-semibold text-black">
                  Enabling our business operations.
                </div>

                <div className="col-span-4 text-lg font-semibold text-black">
                  Where We rely on your consent to process your Personal
                  Information, you have the right to change, withdraw or
                  withhold your consent. Notwithstanding the forgoing, the
                  processing of IP addresses is a necessary part of providing
                  access to the Sites, so We cannot provide access to the Site
                  without this information.
                </div>
              </div>
            </div>
          </card>
        </div>
      </Container>
    </>
  );

};

export default PrivacyPolicy;
