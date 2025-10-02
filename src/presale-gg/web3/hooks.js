import { getAccount, watchAccount } from "@wagmi/core";
import { getConfig, configRef } from "./config";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useUserState } from "../stores/user.store";

import Mercedes from "../../assects/images/rng (3).png";
import Porsche from "../../assects/images/rng (2).webp";
import Bentley from "../../assects/images/rng (1).png";
import Ferrari from "../../assects/images/rng (5).png";
import Lamborghini from "../../assects/images/rng (4).webp";

import Tick1 from "../../assects/images/tick1 (1).png";
import cross from "../../assects/images/xcs.svg";

/**
 * @typedef {object} GetAccountReturnType
 * @property {`0x${string}` | undefined} address,
 * @property {`0x${string}`[]} addresses,
 * @property {number | undefined} chainId
 * @property {boolean} isConnected
 */
export const useAccount = () => {
  /** @type {[GetAccountReturnType, import("react").Dispatch<import("react").SetStateAction<GetAccountReturnType>)]} */
  const [accountData, setAccountData] = useState(undefined);
  useEffect(() => {
    const config = configRef.current?.config;
    if (config) {
      const accountData = getAccount(config);
      setAccountData(accountData);
    }

    let unwatch = undefined;
    const func = async () => {
      const { config } = await getConfig();
      const _unwatch = watchAccount(config, {
        onChange: (account) => {
          setAccountData(account);
        },
      });
      unwatch = _unwatch;
    };
    if (config) func();
    else document.addEventListener("wagmi-loaded", func);

    return () => {
      document.removeEventListener("wagmi-loaded", func);
      if (!unwatch) return;
      unwatch();
    };
  }, []);
  return (
    accountData ?? {
      address: null,
      addresses: [],
      chainId: null,
      isConnected: false,
    }
  );
};

export const useWindowSize = () => {
  const getSize = useCallback(
    () => ({ width: window.innerWidth, height: window.innerHeight }),
    []
  );
  const [size, setSize] = useState(getSize());

  useEffect(() => {
    const abortController = new AbortController();
    window.addEventListener("resize", () => setSize(getSize()), {
      signal: abortController.signal,
    });
    return () => abortController.abort();
  }, [getSize]);

  return size;
};

/**
 * @param {import("react").RefObject<HTMLElement | null>} ref
 * @param {(e: MouseEvent) => void} callback
 * @param {import("react").RefObject<HTMLElement | null>[]} ignoreRefs
 */
export const useClickAway = (ref, callback, ignoreRefs) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const abortController = new AbortController();
    window.addEventListener(
      "click",
      (e) => {
        if (!el.contains(e.target) && !el.isEqualNode(e.target)) {
          if (
            ignoreRefs?.some(
              (ref) => ref?.contains(e.target) || ref?.isEqualNode(e.target)
            )
          )
            return;
          callback(e);
        }
      },
      { signal: abortController.signal }
    );

    return () => abortController.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback]);
};

/**
 * @param {() => void} callback
 * @param {number} timeoutMs
 * @param {unknown[]} [dependencies]
 */
export const useDebounce = (callback, timeoutMs, dependencies) => {
  const lastCalledRef = useRef(null);

  return useCallback(() => {
    if (lastCalledRef.current) clearTimeout(lastCalledRef.current);
    lastCalledRef.current = setTimeout(callback, timeoutMs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback, timeoutMs, ...dependencies]);
};

export const baseRankData = {
  "Mercedes": {
    totalUsdNeeded: 1000
  },
  "Porsche": {
    totalUsdNeeded: 2500
  },
  "Bentley": {
    totalUsdNeeded: 10000
  },
  "Ferrari": {
    totalUsdNeeded: 25000
  },
  "Lamborghini": {
    totalUsdNeeded: 100000
  }
}

export const USD_PER_LEVEL = 100
const extraRankData = {
    "Mercedes": {
      id: 1,
      name: "RewardSection.packageType1",
      image: Mercedes,
      packageList: [
        {
          id: 1,
          icon: Tick1,
          text: "RewardSection.packageText11",
          info: "RewardSection.packageinfo11",
          infotitle: "RewardSection.packageinfotitle11",

        },
        {
          id: 2,
          icon: Tick1,
          text: "RewardSection.packageText12",
          infotitle: "RewardSection.packageinfotitle12",
          info: "RewardSection.packageinfo12",

        },
        {
          id: 3,
          icon: Tick1,
          text: "RewardSection.packageText13",
          infotitle: "RewardSection.packageinfotitle13",
          info: "RewardSection.packageinfo13",

        },
        {
          id: 4,
          icon: cross,
          infotitle: "RewardSection.packageinfotitle14",
          text: "RewardSection.packageText14",
          info: "RewardSection.packageinfo14",

        },
        {
          id: 5,
          icon: cross,
          text: "RewardSection.packageText15",
          infotitle: "RewardSection.packageinfotitle15",
          info: "RewardSection.packageinfo15",

        },
        {
          id: 6,
          icon: cross,
          text: "RewardSection.packageText16",
        },
      ],
    },
    "Porche": {
      id: 2,
      name: "RewardSection.packageType2",
      image: Porsche,
      packageList: [
        {
          id: 1,
          icon: Tick1,
          text: "RewardSection.packageText21",
          info: "RewardSection.packageinfo12",
          infotitle: "RewardSection.packageinfotitle11",
        },
        {
          id: 2,
          icon: Tick1,
          text: "RewardSection.packageText22",
          info: "RewardSection.packageinfo12",
          infotitle: "RewardSection.packageinfotitle12",
        },
        {
          id: 3,
          icon: Tick1,
          text: "RewardSection.packageText23",
          info: "RewardSection.packageinfo13",
          infotitle: "RewardSection.packageinfotitle13",
        },
        {
          id: 4,
          icon: Tick1,
          text: "RewardSection.packageText24",
          info: "RewardSection.packageinfo14",
          infotitle: "RewardSection.packageinfotitle14",
        },
        {
          id: 5,
          icon: cross,
          text: "RewardSection.packageText25",
          info: "RewardSection.packageinfo15",
          infotitle: "RewardSection.packageinfotitle15",
        },
        {
          id: 6,
          icon: cross,
          text: "RewardSection.packageText16",
        },
      ],
    },
    "Bentley": {
      id: 3,
      name: "RewardSection.packageType3",
      image: Bentley,
      packageList: [
        {
          id: 1,
          icon: Tick1,
          text: "RewardSection.packageText31",
          info: "RewardSection.packageinfo13",
          infotitle: "RewardSection.packageinfotitle11",
        },
        {
          id: 2,
          icon: Tick1,
          text: "RewardSection.packageText32",
          info: "RewardSection.packageinfo12",
          infotitle: "RewardSection.packageinfotitle12",
        },
        {
          id: 3,
          icon: Tick1,
          text: "RewardSection.packageText33",
          info: "RewardSection.packageinfo13",
          infotitle: "RewardSection.packageinfotitle13",
        },
        {
          id: 4,
          icon: Tick1,
          text: "RewardSection.packageText34",
          info: "RewardSection.packageinfo14",
          infotitle: "RewardSection.packageinfotitle14",
        },
        {
          id: 5,
          icon: Tick1,
          text: "RewardSection.packageText35",
          info: "RewardSection.packageinfo15",
          infotitle: "RewardSection.packageinfotitle15",
        },
        {
          id: 6,
          icon: cross,
          text: "RewardSection.packageText16",
        },
      ],
    },
    "Ferrari": {
      id: 4,
      name: "RewardSection.packageType4",
      image: Ferrari,
      packageList: [
        {
          id: 1,
          icon: Tick1,
          text: "RewardSection.packageText41",
          info: "RewardSection.packageinfo14",
          infotitle: "RewardSection.packageinfotitle11",
        },
        {
          id: 2,
          icon: Tick1,
          text: "RewardSection.packageText42",
          info: "RewardSection.packageinfo12",
          infotitle: "RewardSection.packageinfotitle12",
        },
        {
          id: 3,
          icon: Tick1,
          text: "RewardSection.packageText43",
          info: "RewardSection.packageinfo13",
          infotitle: "RewardSection.packageinfotitle13",
        },
        {
          id: 4,
          icon: Tick1,
          text: "RewardSection.packageText44",
          info: "RewardSection.packageinfo14",
          infotitle: "RewardSection.packageinfotitle14",
        },
        {
          id: 5,
          icon: Tick1,
          text: "RewardSection.packageText45",
          info: "RewardSection.packageinfo45",
          infotitle: "RewardSection.packageinfotitle15",
        },
        {
          id: 6,
          icon: Tick1,
          text: "RewardSection.packageText16",
        },
      ],
    },
    "Lamborghini": {
      id: 5,
      name: "RewardSection.packageType5",
      image: Lamborghini,
      packageList: [
        {
          id: 1,
          icon: Tick1,
          text: "RewardSection.packageText51",
          info: "RewardSection.packageinfo15",
          infotitle: "RewardSection.packageinfotitle11",
        },
        {
          id: 2,
          icon: Tick1,
          text: "RewardSection.packageText52",
          info: "RewardSection.packageinfo12",
          infotitle: "RewardSection.packageinfotitle12",
        },
        {
          id: 3,
          icon: Tick1,
          text: "RewardSection.packageText53",
          info: "RewardSection.packageinfo13",
          infotitle: "RewardSection.packageinfotitle13",
        },
        {
          id: 4,
          icon: Tick1,
          text: "RewardSection.packageText54",
          info: "RewardSection.packageinfo14",
          infotitle: "RewardSection.packageinfotitle14",
        },
        {
          id: 5,
          icon: Tick1,
          text: "RewardSection.packageText55",
          info: "RewardSection.packageinfo55",
          infotitle: "RewardSection.packageinfotitle15",
        },
        {
          id: 6,
          icon: Tick1,
          text: "RewardSection.packageText16",
        },
      ],
    },
}

/**
 * @typedef {import("../api/api.types").API.UserRankData} UserRankData
 * @typedef {import("../api/api.types").API.Rank} Rank
 * 
 * @typedef {object} ExtraRankPackageItem
 * @property {number} ExtraRankPackageItem.id
 * @property {string} ExtraRankPackageItem.icon
 * @property {string} ExtraRankPackageItem.text
 * @property {string} ExtraRankPackageItem.info
 * @property {string} ExtraRankPackageItem.infoTitle
 * 
 * @typedef {object} ExtraRankData
 * @property {number} ExtraRankData.id
 * @property {string} ExtraRankData.image
 * @property {string} ExtraRankData.name
 * @property {ExtraRankPackageItem[]} ExtraRankData.packageList
 * @property {number} ExtraRankData.index
 * @property {number} ExtraRankData.totalUsdNeeded
 * 
 * @typedef {Rank & ExtraRankData} ExtraRank
*/

/** 
 * @returns {Omit<UserRankData, 'current_rank' | 'ranks'> & {current_rank: ExtraRank | null, ranks: ExtraRank[], nextRank: ExtraRank | null}}
 */
export const useUserRanks = () => {
  const userData = useUserState()
  /** @param {Rank} rank */
  const applyExtraDataToRank = (rank) => {
    return {
      ...rank,
      ...extraRankData[rank.rank],
      totalUsdNeeded: rank.level * USD_PER_LEVEL,
      index: Object.keys(extraRankData).indexOf(rank.rank)
    }
  }
  const rankData = useMemo(() => {
    if (!userData.rankData) return {
      ranks: [],
      current_rank: null,
      next_rank: null,
      can_level_up: false,
      current_level: 0,
      usd_to_next_level: 0,
      usd_to_next_rank: 0
    }
    const currentRankIndex = userData.rankData.ranks.findIndex((rank) => rank.rank === userData.rankData.current_rank?.rank)
    let nextRankIndex = currentRankIndex + 1
    if (nextRankIndex > userData.rankData.ranks.length - 1) nextRankIndex = null
    return {
      ...userData.rankData,
      ranks: userData.rankData.ranks.map(applyExtraDataToRank),
      current_rank: userData.rankData.current_rank ? applyExtraDataToRank(userData.rankData.current_rank) : null,
      nextRank: nextRankIndex !== null ? applyExtraDataToRank(userData.rankData.ranks[nextRankIndex]) : null
    }
  }, [userData.rankData])

  return rankData
}