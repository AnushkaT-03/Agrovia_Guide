export const ROLES = [
  {
    id: "farmer",
    emoji: "🌾",
    title: "Farmer",
    subtitle: "No app or login needed",
    shortDesc: "Deliver your produce. We handle everything digitally on your behalf.",
    tag: "Walk-in · Zero tech required",
    gradient: "linear-gradient(140deg, #0a2216 0%, #1a3a2a 50%, #2d6a4f 100%)",
    accent: "#40916c",
    accentLight: "#d8f3dc",
    accentDark: "#1a3a2a",
  },
  {
    id: "ops",
    emoji: "🏭",
    title: "Operations",
    subtitle: "Warehouse Admin",
    shortDesc: "Register harvests, grade quality, manage inventory and dispatch orders.",
    tag: "Pass-key: PB2806",
    gradient: "linear-gradient(140deg, #0f2942 0%, #1e4d6b 50%, #2b6cb0 100%)",
    accent: "#3b82f6",
    accentLight: "#dbeafe",
    accentDark: "#1e4d6b",
  },
  {
    id: "retailer",
    emoji: "🏪",
    title: "Retailer",
    subtitle: "Kiosk Operator",
    shortDesc: "Receive stock, run the POS, and reorder from the warehouse when low.",
    tag: "Pass-key: PB2806",
    gradient: "linear-gradient(140deg, #431407 0%, #7c3d12 50%, #b45309 100%)",
    accent: "#f59e0b",
    accentLight: "#fef3c7",
    accentDark: "#7c3d12",
  },
  {
    id: "consumer",
    emoji: "🛒",
    title: "Consumer",
    subtitle: "Buyer",
    shortDesc: "Verify freshness, trace where it grew, and join membership for discounts.",
    tag: "Scan QR · No login",
    gradient: "linear-gradient(140deg, #1e1b4b 0%, #3730a3 50%, #6d28d9 100%)",
    accent: "#8b5cf6",
    accentLight: "#ede9fe",
    accentDark: "#3730a3",
  },
];

export const CONTENT = {
  farmer: {
    intro: "You don't need an app, an account, or any paperwork. Just arrive at the warehouse with your produce — Agrovia staff handle all digital registration on your behalf.",
    callout: {
      type: "info",
      icon: "💡",
      text: "This entire process is handled by Agrovia warehouse staff. Your only job is to show up with your produce.",
    },
    sections: [
      {
        label: "Your 4-Step Journey",
        steps: [
          {
            num: 1,
            icon: "📋",
            title: "Register Once",
            short: "One-time setup — name, farm location & bank details.",
            detail: "First-time farmers provide their name, farm location, and bank details to the warehouse admin. The admin enters this into the system — your name then appears in the 'Select registered farmer' dropdown for every future delivery. You only do this once. After that, you're in the system permanently.",
            tip: "💡 After your first visit, you never need to fill in details again.",
          },
          {
            num: 2,
            icon: "🚛",
            title: "Deliver Your Produce",
            short: "Bring crates to Mumbai, Pune, or Satara warehouse.",
            detail: "Bring your harvested produce in crates to your nearest Agrovia warehouse — Mumbai, Pune, or Satara. The warehouse admin takes over from this point. No forms for you to fill, no app to open, no digital steps required on your end.",
          },
          {
            num: 3,
            icon: "🔬",
            title: "Quality Grading",
            short: "Produce is graded A, B, or C — the grade sets your payout.",
            detail: "Your produce is physically inspected by warehouse staff and assigned a quality grade. Grade A earns the highest Rs./kg rate; Grade C earns a lower rate. The full pricing structure is transparent and visible on the platform — no hidden deductions.",
            gradeTable: true,
          },
          {
            num: 4,
            icon: "💰",
            title: "Get Paid Directly",
            short: "Payout processed straight to your bank. No middlemen.",
            detail: "Once the grade is confirmed, your payout is processed directly to your registered bank account. The exact Rs./kg rate is tied to the grade of your batch. No intermediaries, no commission cuts.",
            tip: "🔒 Always remind warehouse staff to log out on shared devices to protect your bank details.",
          },
        ],
      },
    ],
  },

  ops: {
    intro: "You are the operational hub — every harvest flows through you. You register intake, run quality grading, manage live inventory, and fulfill retailer orders.",
    callout: {
      type: "key",
      icon: "🔑",
      text: "Login: agroviaa.vercel.app → Operations Management → Pass-key: PB2806",
    },
    sections: [
      {
        label: "Section A — Farmer Intake",
        steps: [
          {
            num: 1,
            icon: "📂",
            title: "Open Farmer Intake",
            short: "Sidebar → Product Management → Farmer Intake tab",
            detail: "From the left sidebar, click Product Management, then select the Farmer Intake tab. This opens the New Harvest Registration form.",
          },
          {
            num: 2,
            icon: "📝",
            title: "Fill Registration Form",
            short: "Select crop, farmer, date, warehouse, quantity & storage type.",
            detail: "Complete all fields: Product (crop type from dropdown), Farmer (select registered farmer or click + to add new), Harvest Date (actual date, required), Target Warehouse (Mumbai / Pune / Satara), Quantity in kg, and Storage Method (Normal or Cold).",
          },
          {
            num: 3,
            icon: "🏷️",
            title: "Submit — Batch Created",
            short: "System instantly generates a unique Batch ID and QR code.",
            detail: "Click Submit / Register Harvest. A unique Batch ID (e.g. BTH-MMM8ANF9-L27E) and QR code are generated immediately. The batch status is set to Test Pending.",
            tip: "🏷️ Print and attach the QR label to the physical crates immediately after this step.",
          },
          {
            num: 4,
            icon: "➡️",
            title: "Go to Quality Testing",
            short: "Click 'Proceed to Quality Testing' on the confirmation screen.",
            detail: "The confirmation screen has a direct link to Quality Reports with the new batch pre-loaded — no need to search manually.",
          },
        ],
      },
      {
        label: "Section B — Quality Reports",
        steps: [
          {
            num: 5,
            icon: "🔎",
            title: "Select a Test Pending Batch",
            short: "Sidebar → Quality Reports → search by Batch ID or farmer name.",
            detail: "Click Quality Reports in the sidebar. All batches with Test Pending status appear in the list. Search by Batch ID or farmer name to find the one you want to grade.",
          },
          {
            num: 6,
            icon: "⭐",
            title: "Assign a Grade",
            short: "Inspect physically → assign Grade A, B, or C.",
            detail: "After physically inspecting the produce, assign one of three grades. An AI scan feature is available for demonstration, but in live operations physical inspection determines the grade.",
            gradeTable: true,
          },
          {
            num: 7,
            icon: "💰",
            title: "Confirm & View Pricing",
            short: "Click Confirm Grade — full pricing breakdown appears instantly.",
            detail: "The system displays: Farmer Payout (Rs./kg paid to farmer), Warehouse Price (what retailer pays), and Retailer Selling Price (customer-facing price including testing & logistics). The Farmer Payout Impact section shows exactly how much the farmer earns from this batch.",
          },
        ],
      },
      {
        label: "Section C — Inventory & Dispatch",
        steps: [
          {
            num: 8,
            icon: "📦",
            title: "Current Inventory",
            short: "Filter by Fresh / Consume Soon / Expired across all warehouses.",
            detail: "Sidebar → Warehouse Inventory → Current Inventory tab. Filter stock by freshness status. Scan or type a Batch ID into the search bar (or use Open Camera) to get full tracking details and AI shelf-life suggestions. The top stat bar shows Total Batches, Fresh Stock, Low Shelf-Life, and Total Crates.",
          },
          {
            num: 9,
            icon: "🚚",
            title: "Live Logistics",
            short: "Real-time status of all dispatched batches.",
            detail: "Switch to the Live Logistics tab to monitor which batches are in transit, which have been delivered, and any delivery exceptions.",
          },
          {
            num: 10,
            icon: "📋",
            title: "Crate Management",
            short: "Track which crates are at warehouse, with retailers, or need return.",
            detail: "The Crate Management tab shows the physical status of all crates in circulation — at the warehouse, with a retailer, or due for collection and return.",
          },
          {
            num: 11,
            icon: "🛒",
            title: "Fulfill Retailer Orders",
            short: "Orders tab → select inventory → confirm dispatch.",
            detail: "When a retailer places a restocking request, it appears in the Orders tab. Review the order, select matching inventory batches to fulfill it, and confirm dispatch. The retailer's kiosk inventory updates automatically once dispatched.",
            tip: "🏪 Orders are location-tied — Pune kiosk orders are fulfilled from Pune Warehouse stock.",
          },
        ],
      },
    ],
  },

  retailer: {
    intro: "Your kiosk portal covers everything — billing customers through the POS, managing your live inventory, and placing restocking orders from the warehouse.",
    callout: {
      type: "key",
      icon: "🔑",
      text: "Login: agroviaa.vercel.app → Retailer → Enter your kiosk pass-key (Demo: PB2806)",
    },
    sections: [
      {
        label: "Tab A — Customer Billing (POS)",
        steps: [
          {
            num: 1,
            icon: "🖥️",
            title: "Open the POS",
            short: "Header → Customer Billing (POS)",
            detail: "From the Retailer Portal header, click Customer Billing (POS). The screen shows two panels: the left for entering customer and item details, the right for the live bill preview.",
          },
          {
            num: 2,
            icon: "📱",
            title: "Enter Customer Phone",
            short: "Type number — existing members auto-load with discounts applied.",
            detail: "Type the customer's phone number in the Customer Phone field. If they're an existing member, their name and ID (e.g. AGV-883800) auto-appear with a PREMIUM badge — discounts are applied automatically. For new customers, click Create Member ID to register them on the spot for future discounts.",
          },
          {
            num: 3,
            icon: "➕",
            title: "Add Items to Cart",
            short: "Scan QR or select batch → enter kg → click + Add to Cart.",
            detail: "Use the dropdown to scan or select a produce batch from your kiosk inventory. You can also type the Batch ID directly. Enter the Quantity in kg and click the blue + Add to Cart button.",
            tip: "📦 Items showing 'Out of Stock' need restocking first — use Tab B below.",
          },
          {
            num: 4,
            icon: "🧾",
            title: "Checkout & Give Bill",
            short: "Select payment method → Checkout → hand bill to customer.",
            detail: "Review the live bill on the right panel (members see discounted Total in blue). Select the Payment Method (Cash or other options). Click Checkout — a bill is generated with a unique code and QR. Hand this to the customer. They use this code in the Consumer portal to verify their purchase and trace the produce.",
            tip: "🔍 Ask customers to zoom in on the QR code on the bill for best scan results.",
          },
        ],
      },
      {
        label: "Tab B — Restock from Warehouse",
        steps: [
          {
            num: 1,
            icon: "📋",
            title: "Place a Warehouse Order",
            short: "Select warehouse → pick batch → enter crate quantity.",
            detail: "In the Inventory Procurement tab, under Place Warehouse Order, select your supply warehouse (e.g. Pune Warehouse), choose the Product Batch from available stock, and enter how many crates you need.",
          },
          {
            num: 2,
            icon: "💳",
            title: "Choose Payment & Submit",
            short: "Pay Instantly or Pay Later → Submit Order.",
            detail: "Select your preferred payment option — Pay Instantly (immediate payment on order) or Pay Later (credit arrangement). Click Submit Order to send the request to the warehouse.",
          },
          {
            num: 3,
            icon: "📡",
            title: "Track Your Order",
            short: "Recent Orders panel shows status — updates to Fulfilled on dispatch.",
            detail: "The Recent Orders panel on the right shows all orders with their Order ID, crate count, source batch, warehouse, and payment status. Once the Operations team dispatches from their dashboard, your order status updates to Fulfilled and the stock appears in your kiosk inventory.",
          },
        ],
      },
    ],
  },

  consumer: {
    intro: "Your portal is all about transparency — see exactly where your food came from, verify what you paid for, and get discounts as a member.",
    callout: {
      type: "info",
      icon: "📱",
      text: "No login or app needed — just visit agroviaa.vercel.app and open the Consumer portal.",
    },
    sections: [
      {
        label: "What You Can Do",
        steps: [
          {
            num: 1,
            icon: "✅",
            title: "Verify Your Purchase",
            short: "Enter your bill code → see full purchase & quality details.",
            detail: "On the Customer tab, enter the unique bill code from your kiosk receipt in the Enter bill code field, then click the search icon. Your purchase details and product quality information appear instantly.",
            tip: "🧾 The 8-character code is printed at the bottom of your receipt, near the barcode.",
          },
          {
            num: 2,
            icon: "📷",
            title: "Scan the Bill QR",
            short: "Tap 'Scan QR Code' → point at your receipt → done.",
            detail: "Instead of typing the code, tap the Scan QR Code button (top-right of the Customer tab). Point your phone camera at the QR on your receipt — zoom in for best results. The code auto-fills and verifies without any typing.",
          },
          {
            num: 3,
            icon: "🗺️",
            title: "Trace Your Produce",
            short: "Traceability tab → enter Batch ID → see the full farm-to-kiosk journey.",
            detail: "Click the Traceability tab and enter a Batch ID (found on your receipt or product label — e.g. BTH-MMM8ANF9-L27E). The platform shows the complete supply chain: farmer origin, harvest date, quality grade, warehouse entry, and kiosk delivery.",
          },
          {
            num: 4,
            icon: "🏅",
            title: "Join the Membership",
            short: "Register with your phone number → get automatic discounts at any kiosk.",
            detail: "Click Membership in the sidebar, select a plan, and register with your phone number. You'll receive a unique Agrovia Member ID. At any Agrovia kiosk, just give your phone number at checkout and discounts are applied automatically.",
          },
          {
            num: 5,
            icon: "💬",
            title: "Use the Support Chatbot",
            short: "Chat bubble (bottom-right) → instant answers, no wait.",
            detail: "The chat bubble icon in the bottom-right corner of the portal opens Agrovia's support chatbot. Get instant answers about membership, traceability, kiosk locations, and billing — no waiting, no phone calls.",
          },
        ],
      },
    ],
  },
};

export const FLOW_STEPS = [
  { emoji: "🌾", label: "Farmer\nDelivers" },
  { emoji: "🏭", label: "Admin\nRegisters" },
  { emoji: "🔬", label: "Quality\nGraded" },
  { emoji: "🏷️", label: "QR Code\nGenerated" },
  { emoji: "🏪", label: "Retail\nKiosk" },
  { emoji: "📱", label: "Consumer\nVerifies" },
];

export const QR_LIFECYCLE = [
  { emoji: "🌾", title: "Farmer Arrival", desc: "Produce logged with farmer ID, crop type, quantity & harvest date." },
  { emoji: "🔬", title: "Quality Test", desc: "Standardised inspection run — grade and results recorded in the digital audit trail." },
  { emoji: "🏷️", title: "QR Code Generated", desc: "Unique Batch ID + QR code printed and applied to each approved crate." },
  { emoji: "📦", title: "Storage & Dispatch", desc: "Crate tracked through warehouse storage and outbound dispatch to retail." },
  { emoji: "🏪", title: "Kiosk Receipt", desc: "Retailer scans to confirm receipt — kiosk inventory updates automatically." },
  { emoji: "📱", title: "Consumer Scan", desc: "Buyer scans QR to see full origin, quality grade & farm story. No app needed." },
];

export const TIPS = [
  { icon: "🌐", title: "Access the Platform", text: "Live at agroviaa.vercel.app — works in any modern browser, desktop or mobile. No install needed." },
  { icon: "🔑", title: "Pass-Key", text: "Operations Management and Retailer both use PB2806 as the demo pass-key. Keep it secure." },
  { icon: "📊", title: "Analytics", text: "Operations staff can view real-time KPIs and charts on the Streamlit-powered analytics tab." },
  { icon: "📱", title: "QR Scanning", text: "No special app — any smartphone camera pointing at an Agrovia QR opens the trace page in-browser." },
  { icon: "💳", title: "Payments", text: "Google Pay integration for instant farmer payments is on the roadmap. Currently via bank transfer.", soon: true },
  { icon: "🗺️", title: "Kiosk Locator", text: "A Maps API integration to find the nearest kiosk will be added soon.", soon: true },
];
