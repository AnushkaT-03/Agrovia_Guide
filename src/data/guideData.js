export const roles = [
  {
    id: 'farmer',
    emoji: '🌾',
    title: 'Farmer',
    subtitle: 'No login needed',
    tagline: 'Deliver your harvest and get paid — the admin handles everything else.',
    badge: 'No App Required',
    badgeColor: 'green',
    description: 'Farmers don\'t need an app or a login. Just arrive at the warehouse with your produce and the Operations Admin handles all digital intake on your behalf.',
    sections: [
      {
        title: 'Your Journey',
        steps: [
          {
            num: 1,
            title: 'Register with Agrovia',
            when: 'First visit only',
            icon: '📋',
            short: 'Provide your name, farm location, and bank details to the warehouse admin.',
            detail: 'The admin registers you in the system. Your name then appears in the "Select registered farmer" dropdown for all future deliveries. This only needs to happen once — after that, you\'re permanently in the system.',
            tip: 'After registration, future visits are even faster — just show up with your produce.',
          },
          {
            num: 2,
            title: 'Deliver Your Produce',
            when: 'Every visit',
            icon: '🚜',
            short: 'Bring harvested produce in crates to any Agrovia warehouse.',
            detail: 'Warehouses are located in Mumbai, Pune, and Satara. The warehouse admin handles all the digital intake. No forms, no app, no hassle on your side.',
            tip: null,
          },
          {
            num: 3,
            title: 'Wait for Quality Grading',
            when: 'Same day',
            icon: '🔬',
            short: 'Your produce is inspected and assigned a quality grade (A, B, or C).',
            detail: 'The grade determines your Rs./kg payout rate — Grade A earns the highest rate. Pricing is fully transparent and visible on the platform.',
            tip: null,
            table: {
              headers: ['Grade', 'Quality', 'Payout Rate'],
              rows: [
                { grade: 'A', gradeColor: 'a', quality: 'Premium Quality', payout: 'Highest' },
                { grade: 'B', gradeColor: 'b', quality: 'Standard Market', payout: 'Standard' },
                { grade: 'C', gradeColor: 'c', quality: 'Below Standard',  payout: 'Lower' },
              ],
            },
          },
          {
            num: 4,
            title: 'Receive Direct Payment',
            when: 'After grading',
            icon: '💰',
            short: 'Payout is sent directly to your registered bank account.',
            detail: 'No middlemen, no deductions. The exact Rs./kg rate is tied to the quality grade assigned to your batch. Fully transparent — you can see exactly how the payout was calculated.',
            tip: 'Always remind warehouse staff to log out of shared devices after your registration to protect your bank details.',
          },
        ],
      },
    ],
  },

  {
    id: 'ops',
    emoji: '🏭',
    title: 'Operations',
    subtitle: 'Warehouse Admin',
    tagline: 'Register harvests, grade batches, manage inventory, and fulfill retailer orders.',
    badge: 'Pass-Key: PB2806',
    badgeColor: 'amber',
    description: 'You are the hub of the entire supply chain — every harvest, every grade, every dispatch flows through your dashboard.',
    passkey: 'PB2806',
    loginUrl: 'https://agroviaa.vercel.app',
    sections: [
      {
        title: 'Section A — Farmer Intake',
        steps: [
          {
            num: 1, icon: '📂', title: 'Open Farmer Intake',
            short: 'Go to Product Management → Farmer Intake tab.',
            detail: 'From the left sidebar, click Product Management, then select the Farmer Intake tab. This opens the New Harvest Registration form.',
          },
          {
            num: 2, icon: '📝', title: 'Fill the Harvest Registration Form',
            short: 'Complete all fields: crop, farmer, date, warehouse, quantity, storage.',
            detail: null,
            list: [
              'Product — choose crop type (Cauliflower, Tomato, Lettuce…)',
              'Farmer — select from dropdown, or tap + to register a new farmer on the spot',
              'Harvest Date — actual date of harvest (required)',
              'Target Warehouse — Mumbai, Pune, or Satara',
              'Quantity (kg) — total weight delivered',
              'Storage Method — Normal or Cold Storage',
            ],
          },
          {
            num: 3, icon: '✅', title: 'Submit — Batch Created!',
            short: 'The system generates a unique Batch ID and QR code instantly.',
            detail: 'Example Batch ID: BTH-MMM8ANF9-L27E. The batch status is set to Test Pending.',
            tip: 'Print and attach the QR label to the physical crates immediately after this step.',
          },
          {
            num: 4, icon: '➡️', title: 'Proceed to Quality Testing',
            short: 'Click "Proceed to Quality Testing" on the confirmation screen.',
            detail: 'This takes you directly to the Quality Reports section with the new batch pre-loaded — no need to search for it.',
          },
        ],
      },
      {
        title: 'Section B — Quality Reports',
        steps: [
          {
            num: 5, icon: '🔍', title: 'Open Quality Reports & Select a Batch',
            short: 'Click Quality Reports in the sidebar. Batches with "Test Pending" status appear in the list.',
            detail: 'Select a batch by Batch ID or farmer name. You can also search using the search bar.',
          },
          {
            num: 6, icon: '🏷️', title: 'Grade the Batch',
            short: 'Physically inspect the produce and assign Grade A, B, or C.',
            detail: 'The AI scan feature is available for demonstration — in live operations, physical test results determine the grade automatically.',
          },
          {
            num: 7, icon: '💹', title: 'Confirm Grade & View Pricing',
            short: 'Click Confirm Grade. Full pricing breakdown is displayed immediately.',
            detail: null,
            list: [
              'Farmer Payout — Rs./kg paid directly to the farmer',
              'Warehouse Price — what the retailer pays to purchase stock',
              'Retailer Selling Price — customer price including testing & logistics costs',
            ],
          },
        ],
      },
      {
        title: 'Section C — Warehouse Inventory',
        steps: [
          {
            num: 8, icon: '📦', title: 'Current Inventory Tab',
            short: 'Live overview of all stock across Mumbai, Pune, and Satara.',
            detail: 'Filter by Fresh / Consume Soon / Expired. Scan or type any Batch ID to see full tracking details and AI suggestions on the right panel.',
            tip: 'Top stat bar shows: Total Batches · Fresh Stock · Low Shelf-Life · Total Crates.',
          },
          {
            num: 9, icon: '🚚', title: 'Live Logistics Tab',
            short: 'Real-time delivery status of all dispatched batches.',
            detail: 'Track which batches are in transit, which have been delivered, and any delivery exceptions.',
          },
          {
            num: 10, icon: '📫', title: 'Crate Management Tab',
            short: 'Track physical crates — at warehouse, with retailers, or needing return.',
            detail: 'Helps you manage the full lifecycle of every physical crate in circulation.',
          },
          {
            num: 11, icon: '🛒', title: 'Orders Tab — Fulfill Retailer Orders',
            short: 'When a retailer requests restocking, the order appears here.',
            detail: 'Review the order, select matching inventory batches, and confirm dispatch. The retailer\'s kiosk inventory updates automatically.',
            tip: 'Orders are location-tied — Pune kiosk orders are fulfilled from Pune Warehouse stock.',
          },
        ],
      },
    ],
  },

  {
    id: 'retailer',
    emoji: '🏪',
    title: 'Retailer',
    subtitle: 'Kiosk Manager',
    tagline: 'Receive stock, sell to customers, and manage restocking — all from one portal.',
    badge: 'Pass-Key: PB2806',
    badgeColor: 'amber',
    description: 'Manage your Agrovia retail kiosk — from accepting warehouse stock to billing customers through the built-in POS system.',
    passkey: 'PB2806',
    loginUrl: 'https://agroviaa.vercel.app',
    sections: [
      {
        title: 'Tab A — Customer Billing (POS)',
        steps: [
          {
            num: 1, icon: '🖥️', title: 'Open Customer Billing (POS)',
            short: 'Click the Customer Billing (POS) tab from the Retailer Portal header.',
            detail: 'Two panels appear: the left for entering customer and item details, the right for the live running bill.',
          },
          {
            num: 2, icon: '📱', title: 'Enter Customer Phone Number',
            short: 'Type the customer\'s phone number to look them up or register them.',
            detail: null,
            list: [
              '✅ Existing Member — name and Member ID auto-appear with a PREMIUM badge. Discounts apply automatically.',
              '🆕 New Customer — click "Create Member ID" to register them on the spot.',
            ],
          },
          {
            num: 3, icon: '🛍️', title: 'Add Items to Cart',
            short: 'Scan QR, select from dropdown, or type the Batch ID. Enter quantity (kg) and tap Add to Cart.',
            detail: 'Items shown as "Out of Stock" need restocking first — go to Tab B (Inventory Procurement) to place a warehouse order.',
          },
          {
            num: 4, icon: '💳', title: 'Review Bill & Checkout',
            short: 'Check the live bill, select payment method, then click Checkout.',
            detail: 'For members, the discounted Total is shown in blue. A bill with a unique code and QR is generated — hand it to the customer.',
            tip: 'The customer uses their bill code or QR in the Consumer portal to verify their purchase and trace produce origin.',
          },
        ],
      },
      {
        title: 'Tab B — Inventory Procurement',
        steps: [
          {
            num: 1, icon: '📋', title: 'Place a Warehouse Order',
            short: 'Select your supply warehouse, pick the product batch, and enter quantity in crates.',
            detail: 'Under "Place Warehouse Order", choose your warehouse (e.g. Pune Warehouse), pick the available batch, and enter how many crates you need.',
          },
          {
            num: 2, icon: '💸', title: 'Choose Payment & Submit',
            short: 'Select Pay Instantly or Pay Later, then click Submit Order.',
            detail: 'The Operations team will see your order in their dashboard and fulfill it. Once dispatched, stock appears automatically in your kiosk inventory.',
          },
          {
            num: 3, icon: '📊', title: 'Track in Recent Orders',
            short: 'The right panel shows all orders with live status updates.',
            detail: 'Each order shows Order ID, crate count, source batch, warehouse, and payment status. Orders update to "Fulfilled" once the warehouse dispatches.',
          },
        ],
      },
    ],
  },

  {
    id: 'consumer',
    emoji: '🛒',
    title: 'Consumer',
    subtitle: 'Buyer & Tracker',
    tagline: 'Verify your purchase, trace produce back to the farm, and earn member discounts.',
    badge: 'No Login Needed',
    badgeColor: 'green',
    description: 'The Consumer portal is your Customer & Traceability Hub — verify bills, trace produce origins, manage membership, and get support.',
    sections: [
      {
        title: 'What You Can Do',
        steps: [
          {
            num: 1, icon: '🧾', title: 'Verify Your Purchase',
            short: 'Enter your bill code from the kiosk receipt to verify what you bought.',
            detail: 'On the Customer tab, enter the unique bill code (printed at the bottom of your receipt) and click the search icon. Purchase details and quality info appear instantly.',
            tip: 'The 8-character code is near the barcode at the bottom of your receipt.',
          },
          {
            num: 2, icon: '📷', title: 'Scan the Bill QR Code',
            short: 'Tap "Scan QR Code" and point your phone camera at the receipt QR.',
            detail: 'The system auto-fills and verifies your code — no typing needed. Zoom in on the QR for best results. You can also use "Scan Product" from the left sidebar as an alternative.',
          },
          {
            num: 3, icon: '🗺️', title: 'Trace Your Produce',
            short: 'Enter a Batch ID to see the full journey from farm to your hands.',
            detail: 'Click the Traceability tab and enter the Batch ID from your receipt (e.g. BTH-MMM8ANF9-L27E). See: farmer origin, harvest date, quality grade, warehouse entry, and kiosk delivery.',
          },
          {
            num: 4, icon: '🏅', title: 'Join the Membership Program',
            short: 'Register with your phone number to get a Member ID and automatic discounts.',
            detail: 'Click Membership in the sidebar, choose a plan, and sign up with your phone number. Once enrolled, just give your number at any Agrovia kiosk to get your member discount applied automatically.',
          },
          {
            num: 5, icon: '💬', title: 'Get Help via the Chatbot',
            short: 'Tap the chat bubble (bottom-right) for instant answers to common questions.',
            detail: 'The built-in chatbot handles queries about membership, traceability, kiosk locations, and billing — no waiting, no phone calls needed.',
            tip: 'The chatbot is rule-based and designed for fast, accurate responses to the most common queries.',
          },
        ],
      },
    ],
  },
];

export const qrLifecycle = [
  { icon: '🌾', title: 'Farmer Arrival',    desc: 'Produce logged with farmer ID, crop type, quantity, and harvest date.' },
  { icon: '🔬', title: 'Quality Test',       desc: 'Standardised inspection run. Grade and test results recorded in the digital audit trail.' },
  { icon: '🏷️', title: 'QR Code Generated', desc: 'Unique Batch ID + QR code printed and applied to each approved crate.' },
  { icon: '📦', title: 'Storage & Dispatch', desc: 'Crate tracked through warehouse storage and outbound dispatch to retail.' },
  { icon: '🏪', title: 'Kiosk Receipt',      desc: 'Retailer scans to confirm receipt. Kiosk inventory updates automatically.' },
  { icon: '📱', title: 'Consumer Scan',      desc: 'Buyer scans QR to view full origin, quality grade, and farm story. No app needed.' },
];

export const tips = [
  { icon: '🌐', title: 'Live Platform',       text: 'Access at agroviaa.vercel.app — works in any modern browser on desktop or mobile. No installation required.', link: 'https://agroviaa.vercel.app', linkText: 'Open Platform' },
  { icon: '🔑', title: 'Shared Pass-Key',     text: 'The demo pass-key for Operations and Retailer roles is PB2806. Keep this secure in production environments.', passkey: 'PB2806' },
  { icon: '📊', title: 'Analytics Dashboard', text: 'Operations staff can view real-time KPIs and charts on the Streamlit-powered analytics tab.', soon: false },
  { icon: '📱', title: 'QR Scanning',         text: 'No special app needed. Point any smartphone camera at an Agrovia QR code to open the trace page in-browser.', soon: false },
  { icon: '💳', title: 'Google Pay Payments', text: 'Instant secure farmer payments via Google Pay are on the roadmap. Currently processed via bank transfer.', soon: true },
  { icon: '🗺️', title: 'Kiosk Locator',       text: 'A Maps integration will let consumers find the nearest Agrovia kiosk and get directions from the platform.', soon: true },
];
