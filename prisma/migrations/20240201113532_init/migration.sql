-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "activity" TEXT NOT NULL,
    "description" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
