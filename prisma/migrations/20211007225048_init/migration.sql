-- CreateTable
CREATE TABLE "Peoples" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Peoples_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Operations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Operations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Status" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Services" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "debit" (
    "id" SERIAL NOT NULL,
    "service" TEXT NOT NULL,
    "account" TEXT NOT NULL,
    "bank" TEXT NOT NULL,
    "description" TEXT,
    "document" TEXT NOT NULL,
    "expiry" TIMESTAMP(3) NOT NULL,
    "operation" TEXT NOT NULL,
    "agency" TEXT NOT NULL DEFAULT E'000',
    "paymentBy" TEXT NOT NULL,
    "paymentDate" TIMESTAMP(3) NOT NULL,
    "pix" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "requestedBy" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "debit_pkey" PRIMARY KEY ("id")
);
